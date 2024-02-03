import React from 'react';

const Swap = ({ onClick }) => {
  return (
    <div className="flex items-center">
      <svg
        width="60"
        height="60"
        viewBox="0 0 100 100"
        onClick={onClick}
        style={{ cursor: 'pointer' }}
      >
        <circle cx="50" cy="50" r="45" fill="#44337A" />
        <text x="20" y="55" fontSize="24" fill="white" onClick={onClick} style={{ cursor: 'pointer' }}>
          Swap
        </text>
      </svg>
    </div>
  );
};

export default Swap;



