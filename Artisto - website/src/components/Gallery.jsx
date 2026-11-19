// import React, { Suspense, useState, useEffect } from "react";
// import * as THREE from "three";
// import { Canvas } from "@react-three/fiber";
// import { Physics } from "@react-three/cannon";
// import { Stars, Sky, Html } from "@react-three/drei";
// import Moon from "./Moon";
// import Building from "./Building";
// import Ground from "./Ground";
// import Art from "./Art";
// import Furniture from "./Furniture";
// import Camera from "./Camera";
// import Player from "./Player";
// import Lights from "./Lights";
// import AudioGuide from "./AudioGuide";

// const Gallery = () => {
//   const [night, setNight] = useState(true);
//   const [performance, setPerformance] = useState(true);

//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       if (e.code === "KeyN") setNight((prev) => !prev);
//       if (e.code === "KeyP") setPerformance((prev) => !prev);
//     };

//     document.addEventListener("keydown", handleKeyDown);
//     return () => document.removeEventListener("keydown", handleKeyDown);
//   }, []);

//   return (
//     <>
//       <AudioGuide audioSrc="/tiersen.mp3" />
//       <Canvas
//         shadows
//         onCreated={({ gl }) => {
//           gl.shadowMap.enabled = true;
//           gl.shadowMap.type = THREE.PCFSoftShadowMap;
//           gl.physicallyCorrectLights = true;
//         }}
//       >
//        <ambientLight intensity={2} />

//         <ambientLight intensity={night ? 0.1 : 0.2} />
//         <pointLight position={[10, 10, 10]} intensity={0.8} castShadow />

//         <Suspense fallback={<Html center>Loading scene...</Html>}>
//           <Camera fov={60} />
//           {night ? (
//             <>
//               <Stars />
//               <Moon />
//               <fog attach="fog" args={["#272730", 30, 250]} />
//             </>
//           ) : (
//             <>
//               <Sky sunPosition={[110, 170, -250]} />
//               <fog attach="fog" args={["#f0f4f5", 30, 250]} />
//             </>
//           )}
//           <Lights night={night} performance={performance} />
//           <Physics gravity={[0, -30, 0]}>
//             <Ground />
//             <Building />
//             <Art />
//             <Furniture />
//             <Player noCollision />
//           </Physics>
//         </Suspense>
//       </Canvas>
//     </>
//   );
// };

// export default Gallery;



import React, { Suspense, useState, useEffect } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/cannon";
import { Stars, Sky, Html } from "@react-three/drei";
import Moon from "./Moon";
import Building from "./Building";
import Ground from "./Ground";
import Art from "./Art";
import Furniture from "./Furniture";
import Camera from "./Camera";
import Player from "./Player";
import Lights from "./Lights";
import AudioGuide from "./AudioGuide";

const Gallery = () => {
  const [night, setNight] = useState(true);
  const [performance, setPerformance] = useState(true);

  useEffect(() => {
    const handleClick = () => {
      if (document.pointerLockElement === null) {  // Only lock pointer if controls are visible
        document.body.requestPointerLock();
      }
    };
  
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "KeyN") setNight((prev) => !prev);
      if (e.code === "KeyP") setPerformance((prev) => !prev);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []); 

  return (
    <>
      <AudioGuide audioSrc="/tiersen.mp3" />
      <Canvas
        shadows
        onCreated={({ gl }) => {
          gl.shadowMap.enabled = true;
          gl.shadowMap.type = THREE.PCFSoftShadowMap;
          gl.physicallyCorrectLights = true;
        }}
      >
        <ambientLight intensity={2} />
        <ambientLight intensity={night ? 0.1 : 0.2} />
        <pointLight position={[10, 10, 10]} intensity={0.8} castShadow />

        <Suspense fallback={<Html center>Loading scene...</Html>}>
          <Camera fov={60} />
          {night ? (
            <>
              <Stars />
              <Moon />
              <fog attach="fog" args={["#272730", 30, 250]} />
            </>
          ) : (
            <>
              <Sky sunPosition={[110, 170, -250]} />
              <fog attach="fog" args={["#f0f4f5", 30, 250]} />
            </>
          )}
          <Lights night={night} performance={performance} />
          <Physics gravity={[0, -30, 0]}>
            <Ground />
            <Building />
            <Art />
            <Furniture />
            <Player noCollision />
          </Physics>
        </Suspense>
      </Canvas>
    </>
  );
};

export default Gallery;
