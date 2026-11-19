// import React, { useState, useEffect } from "react";
// import ReactDOM from "react-dom/client";
// import "./css/index.css"; // Ensure this is properly linked
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";
// import Loading from "./components/Loading";
// import { BrowserRouter as Router } from "react-router-dom";

// const Overlay = () => {
//   const [ready, setReady] = useState(false);

//   useEffect(() => {
//     const handleLockChange = () => {
//       if (document.pointerLockElement === null) {
//         setReady(false);
//       } else {
//         setReady(true);
//       }
//     };

//     document.addEventListener("pointerlockchange", handleLockChange);
//     return () => {
//       document.removeEventListener("pointerlockchange", handleLockChange);
//     };
//   }, []);

//   return (
//     <>
//      <Router>
//      <App />
//    </Router>
//       <div className={ready ? "" : "overlay"}>
//         <div className="start">Click to Explore</div>
//         <img
//           className={ready ? "" : "controlsL"}
//           src="/assets/Images/ControlsL.png"
//           alt="Move: WASD	Jump: SPACE Run: SHIFT"
//         />
//         <img
//           className={ready ? "" : "controlsR"}
//           src="/assets/Images/ControlsR.png"
//           alt="Look: MOUSE"
//         />
//         <img
//           className={ready ? "" : "controlsTR"}
//           src="/assets/Images/ControlsTR.png"
//           alt="Toggle Performance: P Toggle Night Mode: N"
//         />
//       </div>
//       <div className="dot" style={{ pointerEvents: ready ? "none" : "all" }} />
//       {/* <Loading /> */}

//     </>
//   );
// };

// ReactDOM.createRoot(document.getElementById("root")).render(<Overlay />);
// reportWebVitals();

import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import App from "./App";
import "./css/index.css"; // Ensure this is properly linked

// Overlay Component
const Overlay = () => {
  const [showControls, setShowControls] = useState(true);
  const location = useLocation(); // useLocation hook to track path

  useEffect(() => {
    const handleLockChange = () => {
      // If pointer lock is active, hide the overlay
      if (document.pointerLockElement === null) {
        setShowControls(true); // Show controls if pointer is unlocked
      } else {
        setShowControls(false); // Hide controls when pointer is locked
      }
    };

    const handleClick = () => {
      if (location.pathname === "/gallery" && document.pointerLockElement === null) {
        // Lock the pointer if it's not locked yet
        document.body.requestPointerLock();
      }
    };

    document.addEventListener("pointerlockchange", handleLockChange);
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("pointerlockchange", handleLockChange);
      document.removeEventListener("click", handleClick);
    };
  }, [location.pathname]);

  if (location.pathname !== "/gallery") return null; // Do not show overlay outside /gallery route

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent gray background
        zIndex: 9999,
        display: showControls ? 'flex' : 'none',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        flexDirection: 'column',
        pointerEvents: 'none', // Disable interaction with overlay
      }}
    >
      <div className="start">Click to Explore</div>
      <img
        className="controlsL"
        src="/assets/Images/ControlsL.png"
        alt="Move: WASD Jump: SPACE Run: SHIFT"
      />
      <img
        className="controlsR"
        src="/assets/Images/ControlsR.png"
        alt="Look: MOUSE"
      />
      <img
        className="controlsTR"
        src="/assets/Images/ControlsTR.png"
        alt="Toggle Performance: P Toggle Night Mode: N"
      />
    </div>
  );
};

// Render the app inside the Router
ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Overlay /> {/* Overlay is placed here */}
    <App />     {/* Main App */}
  </Router>
);
