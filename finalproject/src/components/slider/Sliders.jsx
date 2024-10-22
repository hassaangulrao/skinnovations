import React from "react";
import Slider from "react-bootstrap/Carousel";
import pic1 from '../slider/pic1.jfif';
import pic2 from '../slider/img.jfif';
import img from '../slider/imgg.png';

function Sliders() {
  return (
    <Slider fade>
      <Slider.Item>
        <img
          src={pic1}
          alt="Slide 1"
          className="d-block"
          style={{ width: "1200px", height: "500px", objectFit: "cover", margin: "0 auto" }}
        />
        <Slider.Caption>
          <h3>First slide label</h3>
          <p>Some description for slide 1.</p>
        </Slider.Caption>
      </Slider.Item>
      <Slider.Item>
        <img
          src={pic1}
          alt="Slide 1"
          className="d-block"
          style={{ width: "1200px", height: "500px", objectFit: "cover", margin: "0 auto" }}
        />
        <Slider.Caption>
          <h3>First slide label</h3>
          <p>Some description for slide 1.</p>
        </Slider.Caption>
      </Slider.Item>
      <Slider.Item>
        <img
          src={pic1}
          alt="Slide 1"
          className="d-block"
          style={{ width: "1200px", height: "500px", objectFit: "cover", margin: "0 auto" }}
        />
        <Slider.Caption>
          <h3>First slide label</h3>
          <p>Some description for slide 1.</p>
        </Slider.Caption>
      </Slider.Item>
      <Slider.Item>
        <img
          src={pic2}
          alt="Slide 2"
          className="d-block"
          style={{ width: "1200px", height: "500px", objectFit: "cover", margin: "0 auto" }}
        />
        <Slider.Caption>
          <h3>Second slide label</h3>
          <p>Some description for slide 2.</p>
        </Slider.Caption>
      </Slider.Item>
      <Slider.Item>
        <img
          src={img}
          alt="Slide 3"
          className="d-block"
          style={{ width: "1200px", height: "500px", objectFit: "cover", margin: "0 auto" }}
        />
        <Slider.Caption>
          <h3>Third slide label</h3>
          <p>Some description for slide 3.</p>
        </Slider.Caption>
      </Slider.Item>
    </Slider>
  );
}

export default Sliders;
