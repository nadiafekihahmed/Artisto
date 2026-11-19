import React, { useMemo } from 'react';
import { useBox } from "@react-three/cannon";
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';

const Display = ({ position, size }) => {
    const [ref] = useBox(() => ({ 
        type: "static",         
        args: size,
        position  
    }));

    // Load textures properly
    const [alphaMap, diffuseMap, normalMap] = useLoader(THREE.TextureLoader, [
        "assets/Textures/BiancoMarble/BIANCO-ao.jpg",
        "assets/Textures/BiancoMarble/BIANCO-diffuse.jpg",
        "assets/Textures/BiancoMarble/BIANCO-normal.jpg"
    ]);

    return (
        <mesh ref={ref} receiveShadow castShadow>
            <boxGeometry attach="geometry" args={size} />
            <meshPhysicalMaterial 
                attach="material" 
                clearcoat={1}
                roughness={0.5}
                alphaMap={alphaMap}
                map={diffuseMap}
                normalMap={normalMap}
            />
        </mesh>
    );
}

export default Display;
