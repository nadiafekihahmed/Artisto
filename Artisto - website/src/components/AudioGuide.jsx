import React, { useState, useRef } from "react";

const AudioGuide = ({ audioSrc }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio(audioSrc));

  const handlePlay = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };

  const handlePause = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  return (
    <div style={styles.container}>
      {/* Start Button */}
      <button onClick={handlePlay} style={styles.button}>
        <img src="/assets/Images/play-button.png" alt="Play" style={styles.icon} />
      </button>

      {/* Stop Button */}
      <button onClick={handlePause} style={styles.button}>
        <img src="/assets/Images/stop.png" alt="Stop" style={styles.icon} />
      </button>
    </div>
  );
};

// ✅ Styling for buttons
const styles = {
  container: {
    position: "absolute",
    top: "10px",
    right: "10px",
    display: "flex",
    gap: "10px",
    zIndex: 1000,
  },
  button: {
    background: "white",
    border: "none",
    cursor: "pointer",
    borderRadius: "50%",
    width: "50px",
    height: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.3)",
  },
  icon: {
    width: "30px",
    height: "30px",
  },
};

export default AudioGuide;
