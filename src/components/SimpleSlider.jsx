import React, { Component } from "react";
import Slider from "react-slick";
import {DepressionCard, FoodCard, AnxietyCard, StrengthCard} from '../components';
import "./Styles/slick.css"; 
import "./Styles/slick-theme.css";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        
        <Slider {...settings}>
          <div>
            <DepressionCard />
          </div>
          <AnxietyCard />
          <div>
            <FoodCard />
          </div>
          <div>
            <StrengthCard />
          </div>
        </Slider>
      </div>
    );
  }
}