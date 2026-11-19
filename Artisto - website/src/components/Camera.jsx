import React, { useRef, useEffect } from "react";
import { useThree } from "@react-three/fiber";

const Camera = (props) => {
  const ref = useRef();
  const { camera } = useThree();

  useEffect(() => {
    if (ref.current) {
      camera.position.copy(ref.current.position);
      camera.rotation.copy(ref.current.rotation);
    }
  }, [camera]);

  return <perspectiveCamera ref={ref} {...props} />;
};

export default Camera;
