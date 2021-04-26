import * as React from "react";

function SvgReactLogo(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 23 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#React_logo_svg__clip0)">
        <path
          d="M11.5 12.282a2.05 2.05 0 100-4.1 2.05 2.05 0 000 4.1z"
          fill="#000"
        />
        <path
          d="M11.5 14.432c6.075 0 11-1.88 11-4.2 0-2.32-4.925-4.2-11-4.2s-11 1.88-11 4.2c0 2.32 4.925 4.2 11 4.2z"
          stroke="#000"
        />
        <path
          d="M7.863 12.332C10.9 17.593 14.99 20.918 17 19.758c2.009-1.16 1.175-6.365-1.863-11.626C12.1 2.87 8.01-.454 6 .705 3.99 1.865 4.825 7.071 7.863 12.332z"
          stroke="#000"
        />
        <path
          d="M7.863 8.132C4.825 13.392 3.99 18.598 6 19.758c2.009 1.16 6.1-2.165 9.137-7.426C18.175 7.07 19.01 1.865 17 .705 14.99-.455 10.9 2.87 7.863 8.132z"
          stroke="#000"
        />
      </g>
      <defs>
        <clipPath id="React_logo_svg__clip0">
          <path fill="currentColor" d="M0 0h23v20.463H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgReactLogo;
