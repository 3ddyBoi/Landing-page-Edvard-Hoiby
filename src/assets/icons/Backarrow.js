import * as React from "react";

function SvgBackarrow(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 50 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M49.5 16a1.75 1.75 0 00-1.75-1.75H6.474L17.49 3.24A1.753 1.753 0 0015.011.76l-14 14a1.749 1.749 0 000 2.478l14 14a1.752 1.752 0 002.478-2.478L6.474 17.751H47.75A1.75 1.75 0 0049.5 16z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgBackarrow;
