import React from "react";
import "../css/HomePage.css";
import FirstSlider from "../css/slider/HomePage";
export const Homepage = () => {
  return (
    <div>
      <div className="first_container">
        <div>
          <img
            src="https://rukminim2.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100"
            alt="first_image"
          />
          <h4>Grocery</h4>
        </div>
        <div>
          <img
            src="https://rukminim2.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100"
            alt="second_image"
          />
          <h4>Mobiles</h4>
        </div>
        <div>
          <img
            src="https://rukminim2.flixcart.com/fk-p-flap/128/128/image/0d75b34f7d8fbcb3.png?q=100"
            alt="third_image"
          />
          <h4>Fashion</h4>
        </div>
        <div>
          <img
            src="https://rukminim2.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100"
            alt="fourth_image"
          />
          <h4>Electronics</h4>
        </div>
        <div>
          <img
            src="https://rukminim2.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100"
            alt="fifth_image"
          />
          <h4>Home & Furniture</h4>
        </div>
        <div>
          <img
            src="https://rukminim2.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100"
            alt="sixth_image"
          />
          <h4>Appliances</h4>
        </div>
        <div>
          <img
            src="https://rukminim2.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100"
            alt="seventh_image"
          />
          <h4>Travel</h4>
        </div>
        <div>
          <img
            src="https://rukminim2.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100"
            alt="eighth_image"
          />
          <h4>Beauty, Toys & More</h4>
        </div>
        <div>
          <img
            src="https://rukminim2.flixcart.com/fk-p-flap/128/128/image/05d708653beff580.png?q=100"
            alt="ninth_image"
          />
          <h4>Two Wheeler</h4>
        </div>
      </div>
      <div
        className="second_container_firstSlider"
        style={{
          marginTop: "20px",
          marginBottom: "20px",
          textAlign: "center",
          height: "500px",
        }}
      >
        <FirstSlider />
      </div>
    </div>
  );
};
