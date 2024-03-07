import React from 'react';

const Tokenomics = ({ size }) => {
  const radius = size / 2 - 10;
  const circumference = 2 * Math.PI * radius;

  return (
    <svg width={size} height={size} className="progress">
      {/* Blue circle representing 80% */}
      <circle
        className="progress-circle__blue"
        strokeWidth="10"
        fill="transparent"
        stroke="#3e98c7"
        r={radius}
        cx={size / 2}
        cy={size / 2}
        style={{
          strokeDasharray: `${circumference * 0.8} ${circumference}`,
        }}
      />
      {/* Orange circle representing 20% */}
      <circle
        className="progress-circle__orange"
        strokeWidth="10"
        fill="transparent"
        stroke="#f86c6b"
        r={radius}
        cx={size / 2}
        cy={size / 2}
        style={{
          strokeDasharray: `${circumference * 0.2} ${circumference}`,
          strokeDashoffset: `${circumference * 0.8}`, // To align orange to blue
        }}
      />
    </svg>
  );
};


export default Tokenomics;
