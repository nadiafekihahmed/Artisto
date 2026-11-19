import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

const Moon = () => {
    // console.log("Attempting to load Moon model...");
    const { scene } = useGLTF("/assets/3D/Moon/scene.gltf");

    // console.log("Loaded scene:", scene);
    // console.log("Children in the scene:", scene.children);

    scene.traverse((child) => {
        if (child.isMesh) {
            child.material.transparent = false;
            child.material.opacity = 1;
            child.material.side = THREE.DoubleSide;
            child.material.color.set(0xffffff); // Make sure it's visible
            child.material.needsUpdate = true;
        }
    });
    

    return <primitive object={scene} scale={[5, 5, 5]} position={[0, 40, 0]} />;
};

export default Moon;


// import React from "react";
// import { useGLTF } from "@react-three/drei";
// import { Box } from "@react-three/drei";

// const Moon = () => {
//     console.log("Attempting to load Moon model...");
//     const { scene } = useGLTF("/assets/3D/Moon/scene.gltf");
//     console.log("Loaded scene:", scene);

//     scene.traverse((child) => {
//         if (child.isMesh) {
//             child.material.color.set(0xffffff);  // Set color to white
//             child.material.needsUpdate = true;
//         }
//     });

//     return (
//         // <primitive object={scene} scale={[5, 5, 5]} position={[0, 10, 0]} />
//         <Box args={[1, 1, 1]} position={[0, 10, 0]}>
//             <meshStandardMaterial attach="material" color="red" />
//         </Box>
//     );
// };

// export default Moon;


// import { Sphere } from "@react-three/drei";

// const Moon = () => {
//     return (
//         <Sphere args={[5, 32, 32]} position={[0, 10, 0]}>
//             <meshStandardMaterial attach="material" color="white" />
//         </Sphere>
//     );
// };

// export default Moon;
