import React from 'react';
import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';

const Glass = ({ scale, position, rotation, url }) => {
    // Use useGLTF instead of useLoader + draco
    const { scene } = useGLTF(url, "/draco-gltf/");

    const newMaterial = new THREE.MeshPhysicalMaterial({
        color: "skyblue",
        transparent: true,
        opacity: 0.2,
        clearcoat: 1,
        roughness: 0,
        metalness: 1
    });

    scene.traverse((child) => {
        if (child.isMesh) {
            child.material = newMaterial;
        }
    });

    return (
        <primitive
            renderOrder={1}
            scale={scale}
            position={position}
            rotation={rotation}
            object={scene}
            dispose={null}
        />
    );
};

export default Glass;
