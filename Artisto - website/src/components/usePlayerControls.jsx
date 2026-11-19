import { useEffect, useState } from "react";

const moveFieldByKey = {
  KeyW: "forward",
  KeyS: "backward",
  KeyA: "left",
  KeyD: "right",
  Space: "jump"
};

const usePlayerControls = () => {
  const [movement, setMovement] = useState({
    forward: false,
    backward: false,
    left: false,
    right: false,
    jump: false,
    speed: 15,  // Default speed
  });

  useEffect(() => {  
    const handleKeyDown = (e) => {
      console.log("Key Pressed (Down):", e.code);  // Debugging key press
      
      setMovement((prev) => {
        const key = moveFieldByKey[e.code];
        if (key) {
          return { ...prev, [key]: true };
        } else if (e.code === "ShiftLeft") {
          return { ...prev, speed: 30 }; // Sprinting
        }
        return prev;
      });
    };

    const handleKeyUp = (e) => {
      console.log("Key Released (Up):", e.code);  // Debugging key release

      setMovement((prev) => {
        const key = moveFieldByKey[e.code];
        if (key) {
          return { ...prev, [key]: false };
        } else if (e.code === "ShiftLeft") {
          return { ...prev, speed: 15 }; // Back to normal speed
        }
        return prev;
      });
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return movement;
};

export default usePlayerControls;
