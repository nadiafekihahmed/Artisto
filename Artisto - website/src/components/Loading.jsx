// import React, { useState, useEffect } from "react";
// import * as THREE from "three";

// const Loading = () => {
//   const [finished, setFinished] = useState(false);
//   const [width, setWidth] = useState(0);

//   useEffect(() => {
//     THREE.DefaultLoadingManager.onLoad = () => {
//       console.log("✅ All assets loaded!");
//       setFinished(true);
//     };

//     THREE.DefaultLoadingManager.onProgress = (url, itemsLoaded, itemsTotal) => {
//       setWidth((itemsLoaded / itemsTotal) * 200);
//     };

//      }, []);

//   return (
//     <div className={`loading ${finished ? "fade-out" : ""}`}>
//       <h1 className="welcome">The Gallery</h1>
//       <div className="loading-bar-container">
//         <div className="loading-bar" style={{ width }} />
//       </div>
//     </div>
//   );
// };

// export default Loading;



import React, { useState, useEffect } from "react";
import * as THREE from "three";

const Loading = ({ onFinish }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    THREE.DefaultLoadingManager.onLoad = () => {
      console.log("✅ All assets loaded!");
      onFinish(); // Notify parent to switch to App
    };

    THREE.DefaultLoadingManager.onProgress = (url, itemsLoaded, itemsTotal) => {
      setWidth((itemsLoaded / itemsTotal) * 100);
    };

  }, [onFinish]);

  return (
    <div className="loading">
      <h1 className="welcome">The Gallery</h1>
      <div className="loading-bar-container">
        <div className="loading-bar" style={{ width: `${width}%` }} />
      </div>
      <p>{Math.round(width)}% Loaded</p>
    </div>
  );
};

export default Loading;
