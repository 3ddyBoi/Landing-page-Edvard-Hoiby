import * as React from "react";

function SvgStrapiLogo(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.27 13.593V7.14a.416.416 0 00-.416-.416H6.408V.062h13.1c.23 0 .416.187.416.417v13.114H13.27z"
        fill="#000"
      />
      <path
        opacity={0.405}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.408.062v6.662H.256a.208.208 0 01-.147-.356L6.408.062zM13.27 19.751v-6.158h6.654l-6.299 6.305a.208.208 0 01-.355-.147z"
        fill="#000"
      />
      <path
        opacity={0.405}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.408 6.724h6.654c.115 0 .208.093.208.208v6.661H6.824a.416.416 0 01-.416-.416V6.724z"
        fill="#000"
      />
    </svg>
  );
}

export default SvgStrapiLogo;
