// import React from 'react';
// import { useGLTF } from '@react-three/drei';

// const Picture = ({
//   url,
//   scale,
//   position,  
//   rotation,
//   metalness,
//   roughness
// }) => {
//     // Load GLTF model with automatic Draco decompression
//     const { scene } = useGLTF(url, "/draco-gltf/");

//     scene.traverse((child) => {
//       if (child.isMesh) {                                     
//           child.castShadow = true;
//           child.receiveShadow = true;
//           child.material.toneMapped = false;
//           child.material.metalness = metalness;
//           child.material.roughness = roughness;
//       }
//     });

//     return (
//          <primitive 
//             scale={scale} 
//             position={position}
//             rotation={rotation}
//             object={scene}                    
//             dispose={null}
//           />
//     );
// };

// export default Picture;

// import React, { useState, useEffect } from "react";
// import { useGLTF } from "@react-three/drei";
// import * as THREE from "three";
// import { useFrame } from "@react-three/fiber";
// import { Html } from "@react-three/drei"; 

// const Picture = ({
//   url,
//   scale,
//   position,
//   rotation,
//   metalness,
//   roughness,
//   info, // Painting info: title, artist, description, year
//   playerRef, // Reference to the player
// }) => {
//   const { scene } = useGLTF(url, "/draco-gltf/");
//   const [isNear, setIsNear] = useState(false);
//   const threshold = 5; // Distance threshold to trigger info display

//   const Picture = ({ playerRef }) => {
//     if (!playerRef || !playerRef.current) {
//       console.error("playerRef is undefined!");
//       return null;
//     }
//   };

//   scene.traverse((child) => {
//     if (child.isMesh) {
//       child.castShadow = true;
//       child.receiveShadow = true;
//       child.material.toneMapped = false;
//       child.material.metalness = metalness;
//       child.material.roughness = roughness;
//       console.log("playerRef:", playerRef);
// console.log("playerRef.current:", playerRef?.current);

//     }
//   });

//   useFrame(() => {
//     if (!playerRef.current) return;

//     const paintingPos = new THREE.Vector3(...position);
//     const playerPos = new THREE.Vector3().setFromMatrixPosition(playerRef.current.matrixWorld);
    
//     const distance = paintingPos.distanceTo(playerPos);
//     setIsNear(distance < threshold);
//   });

//   return (
//     <>
//       <primitive scale={scale} position={position} rotation={rotation} object={scene} dispose={null} />
//       {isNear && (
//   <Html position={position} center>
//     <div className="painting-info">
//       <h3>{info.title}</h3>
//       <p><strong>Artist:</strong> {info.artist}</p>
//       <p><strong>Description:</strong> {info.description}</p>
//       <p><strong>Year:</strong> {info.year}</p>
//     </div>
//   </Html>
// )}
//     </>
//   );
// };

// export default Picture;



import React, { useState } from "react";
import { useGLTF, Html } from "@react-three/drei";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

const Picture = ({
  url,
  scale,
  position,
  rotation,
  info, // Painting info: title, artist, description, year
  playerRef, // Reference to the player
}) => {
  const { scene } = useGLTF(url, "/draco-gltf/");
  const [isNear, setIsNear] = useState(false);
  const threshold = 8; // Distance threshold to trigger info display

  useFrame(() => {
    if (!playerRef?.current) return;

    const paintingPos = new THREE.Vector3(...position);
    const playerPos = new THREE.Vector3().setFromMatrixPosition(playerRef.current.matrixWorld);
    
    const distance = paintingPos.distanceTo(playerPos);
    setIsNear(distance < threshold);
  });

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
    <>
      {/* 3D Picture Model */}
      <primitive scale={scale} position={position} rotation={rotation} object={scene} dispose={null} />

      {/* Painting Info Overlay (Only show when near) */}
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
    </>
  );
};

export default Picture;
