import * as React from "react";

interface ICommentIconProps {}

const CommentIcon: React.FunctionComponent<ICommentIconProps> = (props) => {
  return (
    <span>
      <svg
        aria-label="Bình luận"
        className="x1lliihq x1n2onr6"
        color="rgb(38, 38, 38)"
        fill="rgb(38, 38, 38)"
        height="24"
        role="img"
        viewBox="0 0 24 24"
        width="24"
      >
        <title>Comment</title>
        <path
          d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"
          fill="none"
          stroke="currentColor"
          stroke-linejoin="round"
          stroke-width="2"
        ></path>
      </svg>
    </span>
  );
};

export default CommentIcon;
