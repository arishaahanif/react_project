import React, { Component } from "react";
import Slider from "react-slick";
import Stars1 from "../Images/download.jpg";
import Card from "react-bootstrap/Card";
import { RiDoubleQuotesL } from "react-icons/ri";
import Shopper from "../Images/ShopperApproved-Logo_Color-1.webp";

const autoArr = [
  {
    text: "Great deal and price for the course.",
    image: Stars1,
    heading: "Andrew",
    icon: <RiDoubleQuotesL />,
  },
  {
    text: "Very informative and easy to navigate.",
    image: Stars1,
    heading: "Heriberto",
    icon: <RiDoubleQuotesL />,
  },
  {
    text: "User friendly platform, good price.",
    image: Stars1,
    heading: "David Berkowitz",
    icon: <RiDoubleQuotesL />,
  },
  {
    text: "I recommend this site super easy to work with and very helpful it’s awesome",
    image: Stars1,
    heading: "Paul",
    icon: <RiDoubleQuotesL />,
  },
  {
    text: "I recommend this site super easy to work with and very helpful it’s awesome",
    image: Stars1,
    heading: "Jeffrey",
    icon: <RiDoubleQuotesL />,
  },
];

const AutoPlay = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="play">
      <div className="approved">
        <img src={Shopper} width={500} />
        <h1 className="customers">OUR CUSTOMERS REVIEWS WITH 5-STAR RATING</h1>
      </div>

      <Slider
        {...settings}
        style={{
          margin: "0 69px",
        }}
      >
        {autoArr.map((item, index) => {
          return (
            <div className="auto_play">
              <Card>
                <Card.Body>
                  <Card.ImgOverlay>
                    <div>{item.icon}</div>
                  </Card.ImgOverlay>

                  <Card.Title>{item.text}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    <img src={item.image} width={180}></img>
                  </Card.Subtitle>

                  <Card.Text>{item.heading}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default AutoPlay;
