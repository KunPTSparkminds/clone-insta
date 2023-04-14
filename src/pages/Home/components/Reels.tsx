import * as React from "react";
import Slider from "react-slick";
import avt from "../../../assets/meow.png";

interface IReelProps {}

const settings = {
  className: "slider variable-width",
  infinite: false,
  centerMode: false,
  slidesToShow: 5,
  slidesToScroll: 5,
  variableWidth: true,
};

const Reel: React.FunctionComponent<IReelProps> = (props) => {
  return (
    <div
      className="reels"
      style={{
        padding: "0 70px",
      }}
    >
      <div>
        <Slider {...settings}>
          {Array.from({ length: 20 }).map((_, index) => (
            <div className="slider-item" key={index} style={{ width: 105 }}>
              <img src={avt} alt="avt" className="rounded-image-reel" />
              <span>{`_truongquan_${index}`}</span>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Reel;
