import React from 'react';

const Space = ({ h }:any) => {
  return (
    <div className={`h-[${h}]`}>
      {/* This empty div creates a space with the specified height */}
    </div>
  );
};

export default Space;
