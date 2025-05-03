import React from "react";

export default function ChunkLogo(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="500"
      height="500"
      viewBox="0 0 375 374.999991"
      preserveAspectRatio="xMidYMid meet"
      version="1.0"
      zoomAndPan="magnify"
      {...props}
    >
      <path
        fill={props.fill}
        d="M 170.039062 205.066406 L 340.03125 205.066406 C 340.03125 298.953125 263.921875 375.058594 170.039062 375.058594 C 76.15625 375.058594 0.046875 298.953125 0.046875 205.066406 C 0.046875 111.183594 76.152344 35.074219 170.039062 35.074219 Z M 227.625 0.046875 L 227.625 147.480469 L 375.058594 147.480469 C 375.058594 66.054688 309.050781 0.046875 227.625 0.046875 Z M 227.625 0.046875"
        fillOpacity="1"
        fillRule="evenodd"
      />
      <path
        strokeLinecap="butt"
        transform="matrix(0.75, 0, 0, 0.75, 127.499996, 185.999988)"
        fill="none"
        strokeLinejoin="miter"
        d="M 0.00000516333 2.000016 L 6.796881 2.000016"
        stroke="#19191a"
        strokeWidth="4"
        strokeOpacity="1"
        strokeMiterlimit="4"
      />
    </svg>
  );
}
