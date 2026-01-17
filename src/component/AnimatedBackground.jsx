import React from "react";

export const AnimatedBackground = () => (
  <div className="area">
    <ul className="circles">
      {[...Array(10)].map((_, i) => (
        <li key={i}></li>
      ))}
    </ul>
  </div>
);

export default AnimatedBackground;
