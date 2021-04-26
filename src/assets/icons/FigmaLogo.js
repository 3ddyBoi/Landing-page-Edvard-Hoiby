import * as React from "react";

function SvgFigmaLogo(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 13 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#Figma_logo_svg__clip0)" fill="#000">
        <path d="M3.25 20c1.794 0 3.25-1.493 3.25-3.333v-3.334H3.25c-1.793 0-3.249 1.494-3.249 3.334S1.457 20 3.251 20zM.001 10c0-1.84 1.456-3.333 3.25-3.333H6.5v6.666H3.25C1.458 13.333.002 11.84.002 10zM.001 3.333C.001 1.493 1.457 0 3.251 0H6.5v6.667H3.25C1.458 6.667.002 5.173.002 3.333zM6.5 0h3.25c1.793 0 3.249 1.493 3.249 3.333s-1.456 3.334-3.25 3.334H6.5V0zM12.999 10c0 1.84-1.456 3.333-3.25 3.333C7.956 13.333 6.5 11.84 6.5 10s1.456-3.333 3.25-3.333c1.793 0 3.249 1.493 3.249 3.333z" />
      </g>
      <defs>
        <clipPath id="Figma_logo_svg__clip0">
          <path fill="currentColor" d="M0 0h13v20H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgFigmaLogo;
