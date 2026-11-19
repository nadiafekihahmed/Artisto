import React, { useEffect, useRef } from 'react';
import { extend, useFrame, useThree } from '@react-three/fiber';
import { PointerLockControls as PointerLockControlsExt } from 'three/examples/jsm/controls/PointerLockControls';

extend({ PointerLockControlsExt })

const PointerLockControls = (props) => {
    const { camera, gl } = useThree()
    const controls = useRef()

    useEffect(() => {
        if (!controls.current) return; // Prevents error
        const handleClick = () => controls.current.lock();
        document.addEventListener("click", handleClick);
        return () => document.removeEventListener("click", handleClick);
    }, [controls]);
    
    useFrame(() => {
        if (!controls.current) return; // 🚨 Prevents the crash
      
        controls.current.update();
      });
      

    return (
        <pointerLockControlsExt
            ref={controls}
            args={[camera, gl.domElement]}
            {...props}
        />
    )
}

export default PointerLockControls