import { Divider, Input } from "antd";
import * as React from "react";
import avt from "../../../assets/meow.png";
import { User } from "../../../models";
import CommentIcon from "../../../svg/CommentIcon";
import FavIcon from "../../../svg/FavIcon";
import SaveIcon from "../../../svg/SaveIcon";
import ShareIcon from "../../../svg/ShareIcon";
import ShowMoreIcon from "../../../svg/ShowMoreIcon";

interface IPostProps {
  post: User;
}

const Post: React.FunctionComponent<IPostProps> = ({ post }) => {
  return (
    <div className="post">
      <div className="post__header">
        <div className="post__header__left">
          <img src={post.avatar} alt="avt" className="rounded-image" />
          <span className="text">mun.kem_meowmeow</span>
          <span className="text">4 hours</span>
        </div>
        <div className="post__header__right">
          <ShowMoreIcon />
        </div>
      </div>
      <div className="post__img">
        <img src={avt} alt="avt" />
      </div>
      <div className="post__react">
        <div className="post__react__left">
          <FavIcon />
          <CommentIcon />
          <ShareIcon />
        </div>
        <div className="post__react__right">
          <SaveIcon />
        </div>
      </div>
      <div className="post__count">
        <img src={avt} alt="avt" className="rounded-image" />
        <span className="text">
          <span>tungtt286</span> và<span> 100 người khác</span> đã thích
        </span>
      </div>
      <div className="post__cmt">
        <Input placeholder="Thêm bình luận..." bordered={false} />
      </div>
      <Divider />
    </div>
  );
};

export default Post;
