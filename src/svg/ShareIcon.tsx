import * as React from "react";

interface IShareIconProps {}

const ShareIcon: React.FunctionComponent<IShareIconProps> = (props) => {
  return (
    <span>
      <svg
        aria-label="Chia sẻ bài viết"
        className="x1lliihq x1n2onr6"
        color="rgb(38, 38, 38)"
        fill="rgb(38, 38, 38)"
        height="24"
        role="img"
        viewBox="0 0 24 24"
        width="24"
      >
        <title>Chia sẻ bài viết</title>
        <line
          fill="none"
          stroke="currentColor"
          stroke-linejoin="round"
          stroke-width="2"
          x1="22"
          x2="9.218"
          y1="3"
          y2="10.083"
        ></line>
        <polygon
          fill="none"
          points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
          stroke="currentColor"
          stroke-linejoin="round"
          stroke-width="2"
        ></polygon>
      </svg>
    </span>
  );
};

export default ShareIcon;
