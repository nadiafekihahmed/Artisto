// Overlay Component
const Overlay = () => {
    const [overlayVisible, setOverlayVisible] = useState(false);
    const location = useLocation();
  
    useEffect(() => {
      const handleLockChange = () => {
        // Only show overlay in gallery when pointer is unlocked
        if (location.pathname === "/gallery") {
          setOverlayVisible(document.pointerLockElement === null);
        } else {
          setOverlayVisible(false);
        }
      };
  
      const handleEscape = (e) => {
        if (e.key === "Escape" && location.pathname === "/gallery") {
          if (document.pointerLockElement !== null) {
            document.exitPointerLock();
          }
        }
      };
  
      document.addEventListener("pointerlockchange", handleLockChange);
      document.addEventListener("keydown", handleEscape);
  
      // Initial state
      handleLockChange();
  
      return () => {
        document.removeEventListener("pointerlockchange", handleLockChange);
        document.removeEventListener("keydown", handleEscape);
      };
    }, [location.pathname]);
  
    return (
      <>
        {/* Only show overlay in gallery route */}
        {location.pathname === "/gallery" && overlayVisible && (
          <div className="overlay">
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
        )}
        {/* Dot follows same visibility rules */}
        <div className="dot" style={{ 
          pointerEvents: overlayVisible ? "none" : "all",
          display: location.pathname === "/gallery" ? "block" : "none"
        }} />
      </>
    );
  };