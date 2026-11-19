import React from 'react';
import Bench from './Bench';

const Furniture = () => {
    return (
        <>
            {/* Large Bench */}
            <Bench 
                url={"assets/3D/Bench/scene.gltf"}
                scale={[0.11, 0.11, 0.11]}
                position={[0, 1, 3]} // Lifted slightly above ground
                rotation={[0, 0, 0]}
                physicsSize={[10, 3, 1]}
                physicsPosition={[0, 1, 3]} // Adjusted y position
            />

            {/* Small Bench */}
            <Bench
                url={"assets/3D/SmallBench/scene.gltf"}
                scale={[0.09, 0.09, 0.09]}
                position={[0, 2, 21.5]} // Lifted slightly above ground
                rotation={[0, 0, 0]}
                physicsSize={[8, 3, 1]}
                physicsPosition={[0, 2, 21.5]} // Adjusted y position
            />
        </>
    );
}

export default Furniture;
