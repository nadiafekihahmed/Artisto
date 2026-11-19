import React, { useEffect, useMemo } from 'react';
import * as THREE from 'three';
import { useThree } from '@react-three/fiber';

const DirectionalLight = ({
    position = [10, 10, 10],
    target = [0, 0, 0],
    intensity = 1,
    color = "#ffffff",
    shadowCamBot = -10,
    shadowCamTop = 10,
    shadowCamL = -10,
    shadowCamR = 10
}) => {
    const { scene } = useThree();

    // Memoized light instance
    const light = useMemo(() => {
        const dirLight = new THREE.DirectionalLight(color, intensity);
        dirLight.castShadow = true;
        
        // Shadow settings
        dirLight.shadow.mapSize.width = 2048;
        dirLight.shadow.mapSize.height = 2048;
        dirLight.shadow.camera.near = 0.5;
        dirLight.shadow.camera.far = 50;
        dirLight.shadow.camera.left = shadowCamL;
        dirLight.shadow.camera.right = shadowCamR;
        dirLight.shadow.camera.top = shadowCamTop;
        dirLight.shadow.camera.bottom = shadowCamBot;

        return dirLight;
    }, [color, intensity, shadowCamBot, shadowCamTop, shadowCamL, shadowCamR]);

    // Update target position
    useEffect(() => {
        light.target.position.set(...target);
        scene.add(light.target);
    }, [target, light, scene]);

    return <primitive object={light} position={position} />;
};

export default DirectionalLight;
