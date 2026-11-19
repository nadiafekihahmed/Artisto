import React, { useRef, useEffect, useState } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import { useTexture, Html } from "@react-three/drei";
import { GLTFExporter } from "three/examples/jsm/exporters/GLTFExporter";
import * as THREE from "three";

const ImageToGLTF = ({ imageUrl, position, scale, rotation, metalness, roughness, playerRef, info }) => {
  const texture = useTexture(imageUrl);
  const planeRef = useRef();
  const { gl } = useThree();
  const [isNear, setIsNear] = useState(false);
  const threshold = 8; // Distance threshold for info display

  useEffect(() => {
    if (texture) {
      texture.encoding = THREE.sRGBEncoding; // Ensure correct colors
      texture.needsUpdate = true;
    }
  }, [texture]);

  useFrame(() => {
    if (!playerRef?.current) return;

    const paintingPos = new THREE.Vector3(...position);
    const playerPos = new THREE.Vector3().setFromMatrixPosition(playerRef.current.matrixWorld);
    
    const distance = paintingPos.distanceTo(playerPos);
    setIsNear(distance < threshold);
  });

  const exportToGLTF = () => {
    const exporter = new GLTFExporter();
    exporter.parse(
      planeRef.current,
      (gltf) => {
        const blob = new Blob([JSON.stringify(gltf)], { type: "application/json" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "artwork.glb";
        link.click();
      },
      { binary: true }
    );
  };

  const overlayStyle = {
    background: "rgba(50, 50, 50, 0.85)", 
    color: "white",
    padding: "12px",
    borderRadius: "5px",
    fontSize: "20px",
    fontFamily: "Arial, sans-serif",
    width: "250px",
    textAlign: "left",
    lineHeight: "1.5",
    boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.5)"
  };

  return (
    <group>
      {/* Add lighting to brighten the scene */}
      <ambientLight intensity={1.5} />
      <directionalLight position={[1, 1, 1]} intensity={0.5} />

      {/* The 3D Image Plane */}
      <mesh ref={planeRef} position={position} scale={scale} rotation={rotation} onClick={exportToGLTF}>
        <planeGeometry args={[5, 5]} />
        <meshStandardMaterial 
          map={texture} 
          metalness={Math.max(0.1, metalness)}  // Prevent too much darkness
          roughness={Math.min(0.5, roughness)}  // Avoid making it too dull
          transparent={true}
          alphaTest={0.5}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Artwork Information Overlay (Only visible when near) */}
      {isNear && (
        <Html position={[position[0], position[1] + 1.5, position[2] + 0.2]} zIndexRange={[1, 0]}>
          <div style={overlayStyle}>
            <h3>{info.title}</h3>
            <p><strong>Artist:</strong> {info.artist}</p>
            <p>{info.description}</p>
            <p><strong>Year:</strong> {info.year}</p>
          </div>
        </Html>
      )}
    </group>
  );
};

export default ImageToGLTF;
