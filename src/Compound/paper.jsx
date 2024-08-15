import React, { useState, useRef, useEffect } from "react";

let highestZIndex = 1;

export const Paper = ({ text }) => {
  const [position, setPosition] = useState({ x: 100, y: 200 });
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [zIndex, setZIndex] = useState(1);
  const containerRef = useRef(null);
  const paperRef = useRef(null);

  useEffect(() => {
    // Set the container to be the window by default
    if (containerRef.current) {
      containerRef.current.style.width = `${window.innerWidth}px`;
      containerRef.current.style.height = `${window.innerHeight}px`;
    }
  }, []);

  // Handles mouse down or touch start
  const handleStart = (e) => {
    const clientX = e.type === "touchstart" ? e.touches[0].clientX : e.clientX;
    const clientY = e.type === "touchstart" ? e.touches[0].clientY : e.clientY;

    setDragging(true);
    setOffset({
      x: clientX - position.x,
      y: clientY - position.y,
    });

    // Bring the current element to the front by increasing its z-index
    highestZIndex += 1;
    setZIndex(highestZIndex);
  };

  // Handles mouse move or touch move
  const handleMove = (e) => {
    if (dragging) {
      const clientX = e.type === "touchmove" ? e.touches[0].clientX : e.clientX;
      const clientY = e.type === "touchmove" ? e.touches[0].clientY : e.clientY;

      // Get container and paper dimensions
      const containerRect = containerRef.current.getBoundingClientRect();
      const paperRect = paperRef.current.getBoundingClientRect();

      // Calculate new position
      let newX = clientX - offset.x;
      let newY = clientY - offset.y;

      // Constrain movement to visible area
      if (newX < 0) newX = 0; // Left boundary
      if (newY < 0) newY = 0; // Top boundary
      if (newX + paperRect.width > containerRect.width)
        newX = containerRect.width - paperRect.width; // Right boundary
      if (newY + paperRect.height > containerRect.height)
        newY = containerRect.height - paperRect.height; // Bottom boundary

      setPosition({ x: newX, y: newY });
    }
  };

  // Handles mouse up or touch end
  const handleEnd = () => {
    setDragging(false);
  };

  return (
    <div
      className="absolute inset-0 z-10"
      ref={containerRef}
      style={{ overflow: "hidden" }} // Ensure that the container hides overflow
    >
      <div
        ref={paperRef}
        style={{
          position: "absolute",
          transform: `translate(${position.x}px, ${position.y}px)`,
          cursor: dragging ? "grabbing" : "grab",
          backgroundImage: `url("https://i0.wp.com/textures.world/wp-content/uploads/2018/10/2-Millimeter-Paper-Background-copy.jpg?ssl=1")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "300px", // Adjust as needed
          height: "100px", // Adjust as needed
          zIndex: zIndex, // Apply the z-index dynamically
          padding:"10px",
          
          
        }}
        onMouseDown={handleStart}
        onMouseMove={handleMove}
        onMouseUp={handleEnd}
        onTouchStart={handleStart}
        onTouchMove={handleMove}
        onTouchEnd={handleEnd}
      >
        <div className="flex items-center justify-evenly">{text}</div>
      </div>
    </div>
  );
};
