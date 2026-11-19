import React from "react";
import Wall from "./Wall";
import WindowFrame from "./WindowFrame";
import Glass from "./Glass";

const Building = () => {
  return (
    <>
      {/* Back Wall */}
      <Wall
        position={[0, 0, -13.5]}
        modelUrl={"/assets/3D/Wall/scene.gltf"}
        mapUrl={"/assets/3D/Wall/Textures/White_Wall.jpg"}
        normalMapUrl={"/assets/3D/Wall/Textures/White_Wall_NORMAL.jpg"}
      />

      {/* Side Windows (Left & Right) */}
      {[-6.5, 6.5].map((x, i) => (
        <React.Fragment key={i}>
          <WindowFrame
            scale={[0.008, 0.008, 0.008]}
            position={[x, 8.5, -15]}
            rotation={[0, Math.PI, 0]}
            modelUrl={`/assets/3D/WindowNoGlass${i === 0 ? "R" : "L"}/scene.gltf`}
            mapUrl={"/assets/3D/WindowNoGlassL/Textures/Material_49_baseColor.png"}
          />
          <Glass
            scale={[0.008, 0.008, 0.008]}
            position={[x, 8.5, -15]}
            rotation={[0, 0, 0]}
            url={`/assets/3D/WindowGlass${i === 0 ? "R" : "L"}/scene.gltf`}
          />
        </React.Fragment>
      ))}

      {/* Roof */}
      <WindowFrame
        scale={[2.7, 2.7, 2.7]}
        position={[0, 27, 13.2]}
        rotation={[0, 0, 0]}
        modelUrl={"/assets/3D/RoofNoGlass/scene.gltf"}
        mapUrl={"/assets/3D/RoofNoGlass/Textures/Material_49_baseColor.png"}
      />
      <Glass
        scale={[2.7, 2.7, 2.7]}
        position={[0, 27, 13.2]}
        rotation={[0, 0, 0]}
        url={"/assets/3D/RoofGlass/scene.gltf"}
      />
    </>
  );
};

export default Building;
