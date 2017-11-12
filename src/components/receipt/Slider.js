import React from 'react';

const Slider = ({onChange}) => {
  return (
    <div>
      <input onChange={onChange} type="range" min="1" max="100" step="1" defaultValue="50" />
    </div>
  );
};

export default Slider;
