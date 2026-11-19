import React, { useRef } from "react";
import Picture from "./Picture";
import Display from "./display";
import { useThree } from "@react-three/fiber";
import ImageToGLTF from "./ImageToGLTF";

const Art = () => {
  const { camera } = useThree();
  const playerRef = useRef(camera);

  return (
    <>
      {/* 🎨 Liam Portrait */}
      <Picture
        url={"/assets/3D/Portrait/scene.gltf"}
        scale={[4, 4, 4]}
        position={[19.3, 7, 0]}
        rotation={[0, -Math.PI, 0]}
        metalness={0.9}
        roughness={0.9}
        playerRef={playerRef}
        info={{
          title: "Liam's Portrait",
          artist: "Unknown",
          description: "A mysterious portrait of a man lost in thought.",
          year: "1845",
        }}
      />
      <Display position={[20, 5, 0]} size={[1, 18, 11]} />

      {/* 👐 Creation of Adam */}
      <Picture
        url={"/assets/3D/Hands/scene.gltf"}
        scale={[0.1, 0.1, 0.1]}
        position={[34.7, 12, 12]}
        rotation={[0, -Math.PI / 2, Math.PI]}
        metalness={0}
        roughness={0.9}
        playerRef={playerRef}
        info={{
          title: "Creation of Adam",
          artist: "Michelangelo",
          description: "A famous depiction of the biblical story from the Sistine Chapel.",
          year: "1511",
        }}
      />

      {/* 💍 Wedding Painting */}
      <Picture
        url={"/assets/3D/Wedding/scene.gltf"}
        scale={[2.5, 2.5, 2.5]}
        position={[19.3, 7, 25]}
        rotation={[Math.PI / 2, Math.PI, 0]}
        metalness={0.0}
        roughness={0.3}
        playerRef={playerRef}
        info={{
          title: "The Wedding Ceremony",
          artist: "Unknown",
          description: "A depiction of a grand royal wedding from an ancient era.",
          year: "1750",
        }}
      />
      <Display position={[20, 5, 25]} size={[1, 18, 11]} />

      {/* 👨 Wilson Portrait */}
      <Picture
        url={"/assets/3D/Wilson/scene.gltf"}
        scale={[2.5, 2.5, 2.5]}
        position={[-19.3, 7, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        metalness={0}
        roughness={0.3}
        playerRef={playerRef}
        info={{
          title: "Wilson's Portrait",
          artist: "John Everett Millais",
          description: "A 19th-century oil painting of a distinguished gentleman.",
          year: "1867",
        }}
      />
      <Display position={[-20, 5, 0]} size={[1, 18, 11]} />

      {/* 👴 Old Man Portrait */}
      <Picture
        url={"/assets/3D/OldMan/scene.gltf"}
        scale={[4, 4, 4]}
        position={[-19.4, 7, 25]}
        rotation={[0, 0, 0]}
        metalness={0.9}
        roughness={0.9}
        playerRef={playerRef}
        info={{
          title: "Wisdom of Age",
          artist: "Rembrandt",
          description: "A powerful portrayal of an elderly man reflecting on life.",
          year: "1654",
        }}
      />
      <Display position={[-20, 5, 25]} size={[1, 18, 11]} />

      {/* 👩 Girl Portrait */}
      <Picture
        url={"/assets/3D/Girl/scene.gltf"}
        scale={[6.5, 6.5, 6.5]}
        position={[-34.6, 10, 12]}
        rotation={[-Math.PI / 2, 0, 0]}
        metalness={0.7}
        roughness={0.8}
        playerRef={playerRef}
        info={{
          title: "The Young Maiden",
          artist: "Leonardo da Vinci",
          description: "A delicate Renaissance portrait of a young noblewoman.",
          year: "1490",
        }}
      />

      {/* 🎭 Rembrandt's Artwork */}
      <Picture
        url={"/assets/3D/artworks/rambrent/scene.gltf"}
        scale={[0.5, 0.5, 0.5]}
        position={[14, 9, 39]}
        rotation={[0, 0, 0]}
        metalness={0.7}
        roughness={0.8}
        playerRef={playerRef}
        info={{
          title: "The Light and the Shadows",
          artist: "Rembrandt",
          description: "A masterpiece showcasing the dramatic use of light and shadow.",
          year: "1632",
        }}
      />

      {/* ⏳ Time and Eternity (Converted Image) */}
      <ImageToGLTF
        imageUrl="/assets/Images/time_art.png"
        position={[-5, 10, 39]}
        scale={[2, 2, 2]}
        rotation={[0, Math.PI, 0]}
        metalness={0.7}
        roughness={0.8}
        playerRef={playerRef}
        info={{
          title: "Time and Eternity",
          artist: "Unknown",
          description: "An abstract interpretation of time's passage.",
          year: "2023",
        }}
      />
    </>
  );
};

export default Art;
