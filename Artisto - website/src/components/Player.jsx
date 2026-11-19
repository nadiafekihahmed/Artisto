import * as THREE from "three";
import React, { useEffect, useRef } from "react";
import { useSphere } from "@react-three/cannon";
import { useThree, useFrame } from "@react-three/fiber";
import PointerLockControls from "./PointerLockControls";
import usePlayerControls from "./usePlayerControls";

const SPEED = 5;
const JUMP_FORCE = 38;
const SIDE_SPEED_MULTIPLIER = 4.5; // Increase side movement speed

const Player = (props) => {
  const { camera } = useThree();
  const { forward, backward, left, right, jump } = usePlayerControls();

  const [ref, api] = useSphere(() => ({
    mass: 1,
    type: "Dynamic",
    position: [0, 5, 0], // Player spawn position
    args: [0.5], // Hitbox size
    linearDamping: 0.99, // Helps prevent sliding
    angularDamping: 0.99, // Reduces unwanted rotation
    ...props,
  }));

  const velocity = useRef([0, 0, 0]);
  const position = useRef([0, 5, 0]); // Track the physics body's position

  useEffect(() => {
    api.velocity.subscribe((v) => (velocity.current = v));
    api.position.subscribe((p) => (position.current = p)); // Sync position updates
  }, [api.velocity, api.position]);

  useFrame(() => {
    if (!ref.current) return;

    // Sync mesh position with physics body
    ref.current.position.set(position.current[0], position.current[1], position.current[2]);

    // Attach camera to player
    camera.position.set(position.current[0], position.current[1] + 7.5, position.current[2]);

    // Movement vectors
    const direction = new THREE.Vector3();
    const frontVector = new THREE.Vector3(0, 0, (backward ? 1 : 0) - (forward ? 1 : 0));
    const sideVector = new THREE.Vector3(
      ((right ? 1 : 0) - (left ? 1 : 0)) * SIDE_SPEED_MULTIPLIER, // 🔥 Boost side movement
      0,
      0
    );

    // Calculate movement direction
    direction.copy(frontVector).add(sideVector);
    direction.normalize();
    direction.x *= 1.5; // Increase left/right movement speed
    direction.multiplyScalar(SPEED);
        direction.applyEuler(camera.rotation); // Apply camera rotation so the player moves correctly

    // Only move if there's input
    if (direction.length() > 0) {
      api.velocity.set(direction.x, velocity.current[1], direction.z);
    }

    // Jump logic
    const isOnGround = Math.abs(velocity.current[1]) < 0.05;
    if (jump && isOnGround) {
      api.velocity.set(velocity.current[0], JUMP_FORCE, velocity.current[2]);
    }

    //  🐛 Debugging
    // console.log("Player Position:", position.current);
    // console.log("Velocity:", velocity.current);
  });

  return (
    <>
      <PointerLockControls />
      <mesh ref={ref} />
    </>
  );
};

export default Player;
