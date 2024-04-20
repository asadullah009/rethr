import { IconsType } from "@/src/types/Common";
import React from "react";


const Icons = ({ name, width, height }: IconsType) => {
  return (
    <svg width={width} height={height}>
      <use href={`./assets/icons.svg#${name}`} />
    </svg>
  );
};

export default Icons;
