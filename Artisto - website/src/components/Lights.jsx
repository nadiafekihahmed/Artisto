import React from 'react';
import SpotLight from './Spotlight';
import PointLight from './PointLight';
import DirectionalLight from './DirectionalLight';
import Spotlight from './Spotlight';

const Lights = ({ night, performance }) => {
    return (
        <>
            <ambientLight intensity={night ? 0.07 : 0.2} />
            <DirectionalLight
                position={[29, 50, -60]}
                target={[-5, -3, 50]}
                intensity={night ? 0.2 : 0.3}
                color={night ? "skyblue" : "lightgoldenrodyellow"}
                shadowCamBot={-30}
                shadowCamTop={30}
                shadowCamL={53}
                shadowCamR={-53}                
            />   
            {night ? (
                <Spotlight
                    position={[0, 80, -120]}
                    target={[80, 150, -200]}
                    intensity={0.5}
                    penumbra={0.5}                
                    sNormalBias={0}
                    sBias={0}
                    angle={-Math.PI}
                    decay={2}               
                />
            ) : null}   

            <PointLight 
                intensity={performance ? 0.25 : 0.6} 
                position={[0, 19, 13]}
            /> 

            {performance ? (
                <>
                    <SpotLight 
                        position={[12, 19.5, 0]}
                        target={[21, 4, 0]}
                        intensity={1.5} 
                        penumbra={0.5}                
                        sNormalBias={0.05}
                        sBias={0}
                        angle={Math.PI/10}
                        decay={2}
                    />
                    {/* Other SpotLights here */}
                </>
            ) : null}
        </>
    );
}

export default Lights;

