// import React, { Suspense, useState, useEffect } from "react";
// import * as THREE from "three";
// import { Canvas } from "@react-three/fiber"; // Update react-three-fiber import
// import { Physics } from "@react-three/cannon"; // Updated from use-cannon
// import { Stars, Sky } from "@react-three/drei";
// import Moon from "./components/Moon";
// import Building from "./components/Building";
// import Ground from "./components/Ground";
// import Art from "./components/Art";
// import Furniture from "./components/Furniture";
// import Camera from "./components/Camera";
// import Player from "./components/Player";
// import Lights from "./components/Lights";
// import { Html } from "@react-three/drei";
// import Loading from "./components/Loading"; // Import Loading component
// import { Debug } from "@react-three/cannon";
// import AudioGuide from "./components/AudioGuide";


// const App = () => {
//   const [night, setNight] = useState(true);
//   const [performance, setPerformance] = useState(true);

//   const audioSrc = import.meta.env.BASE_URL + "assets/tiersen.mp3";

//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       switch (e.code) {
//         case "KeyN":
//           setNight((prev) => !prev);
//           return;
//         case "KeyP":
//           setPerformance((prev) => !prev);
//           return;
//         default:
//           return;
//       }
//     };

//     document.addEventListener("keydown", handleKeyDown);
//     return () => {
//       document.removeEventListener("keydown", handleKeyDown);
//     };
//   }, []);

//   return (
//     <>
//     {/* <Loading />  */}
//     <AudioGuide audioSrc="/tiersen.mp3" /> 
//     <Canvas shadows
//         onCreated={({ gl }) => {
//           gl.shadowMap.enabled = true;
//           gl.shadowMap.type = THREE.PCFSoftShadowMap;
//         }}>

// <ambientLight intensity={2} />
// <pointLight position={[10, 10, 10]} intensity={0.8} castShadow />
//   <Suspense fallback={<Html center>Loading scene...</Html>}>
//     <Camera fov={60} />
    
//     {night ? (
//       <>
//         <Stars />
//         <Moon />
//         <fog attach="fog" args={["#272730", 30, 250]} />
//       </>
//     ) : (
//       <>
//         <Sky sunPosition={[110, 170, -250]} />
//         <fog attach="fog" args={["#f0f4f5", 30, 250]} />
//       </>
//     )}

//     <Lights night={night} performance={performance} />
    
//     <Physics gravity={[0, -30, 0]}>
//     {/* <Debug> */}
//       <Ground />
//       <Building />
//       <Art />
//       <Furniture />
//       <Player noCollision />
//       {/* </Debug> */}
//     </Physics>
//   </Suspense>
// </Canvas>

//     </>
//   );
// };

// export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";
import Gallery from "./components/Gallery";
import ArtistPage from "./components/ArtistPage";
import Home from "./components/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/artist/:artistId" element={<ArtistPage />} />
      <Route path='/' element={<Home />} />
    </Routes>
  );
};

export default App;
