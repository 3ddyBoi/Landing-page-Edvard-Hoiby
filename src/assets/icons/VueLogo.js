import * as React from "react";

function SvgVueLogo(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 26 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20.22 0h5.055L12.638 19.643 0 0h9.668l2.97 4.555L15.544 0h4.676z"
        fill="#000"
      />
      <path
        d="M0 0l12.638 19.643L25.275 0H20.22l-7.582 11.786L4.992 0H0z"
        fill="#000"
      />
      <path
        d="M4.992 0l7.646 11.843L20.22 0h-4.676l-2.906 4.555L9.668 0H4.992z"
        fill="#2B3B4D"
      />
    </svg>
  );
}

export default SvgVueLogo;
