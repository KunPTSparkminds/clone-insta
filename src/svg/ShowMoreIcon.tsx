import * as React from "react";

interface IShowMoreIconProps {}

const ShowMoreIcon: React.FunctionComponent<IShowMoreIconProps> = (props) => {
  return (
    <span>
      <svg
        aria-label="Tùy chọn khác"
        className="_ab6-"
        color="rgb(38, 38, 38)"
        fill="rgb(38, 38, 38)"
        height="24"
        role="img"
        viewBox="0 0 24 24"
        width="24"
      >
        <circle cx="12" cy="12" r="1.5"></circle>
        <circle cx="6" cy="12" r="1.5"></circle>
        <circle cx="18" cy="12" r="1.5"></circle>
      </svg>
    </span>
  );
};

export default ShowMoreIcon;
