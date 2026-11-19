import React, { useMemo } from 'react';
import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { TextureLoader } from 'three';

const WindowFrame = ({ 
    scale,
    position,
    rotation,
    modelUrl,
    mapUrl
}) => {
    // Load the GLTF model with Draco compression
    const { scene } = useGLTF(modelUrl, (loader) => {
        loader.setDRACOLoader(new THREE.DRACOLoader().setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.4.0/'));
    });

    // Load the texture efficiently
    const map = useMemo(() => {
        const texture = new TextureLoader().load(mapUrl);
        texture.flipY = false;
        return texture;
    }, [mapUrl]);

    // Create material and apply to the model
    const newMaterial = useMemo(() => new THREE.MeshPhysicalMaterial({
        metalness: 0.9,
        clearcoat: 1,
        clearcoatRoughness: 0.6,
        roughness: 0.9,
        map: map
    }), [map]);

    scene.traverse((child) => {
        if (child.isMesh) { 
            child.material = newMaterial;
            child.castShadow = true;
            child.receiveShadow = true;
        }
    });

    return (
        <primitive 
            scale={scale}
            position={position}
            rotation={rotation}
            object={scene}
            dispose={null}
        /> 
    );
};

export default WindowFrame;
