import React, { Component } from "react";
import Slider from "react-slick";
import "./quoteSlider.scss";
import Quote from "../Quote/Quote";
import Heading from "../Heading/Heading";

const QuoteSlider = () => {
  const settings = {
    className: "center slider",
    centerMode: true,
    dots: true,
    infinite: true,
    speed: 500,
    centerPadding: "235px",
    slidesToShow: 2,
    slidesToScroll: 2,
  };
  return (
    <div className="quote-slider">
			<Heading title="Section Headline" />
      <Slider {...settings}>
        <div>
          <Quote />
        </div>
        <div>
          <Quote />
        </div>
        <div>
          <Quote />
        </div>
        <div>
          <Quote />
        </div>
        <div>
          <Quote />
        </div>
        <div>
          <Quote />
        </div>
      </Slider>
    </div>
  );
};

export default QuoteSlider;
