import React from "react";
import { useGLTF } from "@react-three/drei";
import { useBox } from "@react-three/cannon";

const Bench = ({ url, scale, position, rotation, physicsSize, physicsPosition }) => {
  // Set up physics for the bench
  const [ref] = useBox(() => ({
    type: "static",
    args: physicsSize,
    position: physicsPosition,
  }));

  // Load 3D model with built-in Draco decompression
  const { scene } = useGLTF(url, "/draco-gltf/");

  // Apply material and shadow properties
  scene.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
      child.material.toneMapped = false;
      child.material.metalness = 0.1;
      child.material.roughness = 1;
      child.material.clearcoat = 0.9;
      child.material.clearcoatRoughness = 0.1;
    }
  });

  return (
    <>
      <mesh ref={ref} />
      <primitive scale={scale} position={position} rotation={rotation} object={scene} dispose={null} />
    </>
  );
};

export default Bench;
