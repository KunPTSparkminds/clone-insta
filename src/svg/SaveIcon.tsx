import * as React from "react";

interface ISaveIconProps {}

const SaveIcon: React.FunctionComponent<ISaveIconProps> = (props) => {
  return (
    <span>
      <svg
        aria-label="Lưu"
        className="x1lliihq x1n2onr6"
        color="rgb(38, 38, 38)"
        fill="rgb(38, 38, 38)"
        height="24"
        role="img"
        viewBox="0 0 24 24"
        width="24"
      >
        <title>Save</title>
        <polygon
          fill="none"
          points="20 21 12 13.44 4 21 4 3 20 3 20 21"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        ></polygon>
      </svg>
    </span>
  );
};

export default SaveIcon;
