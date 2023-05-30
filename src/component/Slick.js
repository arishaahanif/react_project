import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image1 from "../Images/Free-Course-Included-80x80 (1).png";
import { Card, Button, Row, Col } from "react-bootstrap";

const sliderArr = [
  {
    image:
      "https://api.oshaonlinecenter.com/assets/images/course_thumbnail/1632842154325.webp",

    heading: "OSHA 30-Hour Construction Training",
    text: "This  30-Hour Construction OSHA training is intended for workers with supervisory duties according to OSHA 29 CFR while also dispensing knowledge of on-site hazards.",
    cutPrice: "$189.00",
    orginalPrice: "$150.00",
    overLay: Image1,
  },
  {
    image:
      "https://api.oshaonlinecenter.com/assets/images/course_thumbnail/1632904372574.webp",
    heading: "OSHA 10-Hour Online - Construction",
    text: "This  30-Hour Construction OSHA training is intended for workers with supervisory duties according to OSHA 29 CFR while also dispensing knowledge of on-site hazards.",
    cutPrice: "$189.00",
    orginalPrice: "$150.00",
    overLay: Image1,
  },
  {
    image:
      "https://api.oshaonlinecenter.com/assets/images/course_thumbnail/1675671593804.jpg",
    heading: "OSHA New York 10-Hour Construction Industry Training",
    text: "This  30-Hour Construction OSHA training is intended for workers with supervisory duties according to OSHA 29 CFR while also dispensing knowledge of on-site hazards.",
    cutPrice: "$189.00",
    orginalPrice: "$150.00",
    overLay: Image1,
  },
  {
    image:
      "https://api.oshaonlinecenter.com/assets/images/course_thumbnail/1632904505744.webp",
    heading: "OSHA 10-Hour General Industry",
    text: "This  30-Hour Construction OSHA training is intended for workers with supervisory duties according to OSHA 29 CFR while also dispensing knowledge of on-site hazards.",
    cutPrice: "$189.00",
    orginalPrice: "$150.00",
    overLay: Image1,
  },

  {
    image:
      "https://api.oshaonlinecenter.com/assets/images/course_thumbnail/1675671531337.jpg",
    heading: "OSHA New York 30-Hour Construction Training",
    text: "This  30-Hour Construction OSHA training is intended for workers with supervisory duties according to OSHA 29 CFR while also dispensing knowledge of on-site hazards.",
    cutPrice: "$189.00",
    orginalPrice: "$150.00",
    overLay: Image1,
  },
  {
    image:
      "https://api.oshaonlinecenter.com/assets/images/course_thumbnail/1675671593804.jpg",
    heading: "OSHA New York 10-Hour General Industry Training",
    text: "This  30-Hour Construction OSHA training is intended for workers with supervisory duties according to OSHA 29 CFR while also dispensing knowledge of on-site hazards.",
    cutPrice: "$189.00",
    orginalPrice: "$150.00",
    overLay: Image1,
  },
];

export const Slick = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
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
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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
    ],
  };

  return (
    <div className="max1">
      <h2 className="sell">best selling courses</h2>
      <Slider {...settings}>
        {sliderArr.map((item, index) => {
          return (
            <div>
              <Card>
                <Card.ImgOverlay>
                  <img variant="top" src={item.overLay} />
                </Card.ImgOverlay>
                <Card.Img variant="top" className="card-img" src={item.image} />

                <Card.Body>
                  <Card.Title>{item.heading}</Card.Title>
                  <Card.Text>{item.text}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Row>
                    <Col lg={6} md={6} sm={6} xs={6}>
                      <div className="price">
                        <s className="s_card"
                         
                        >
                          {item.cutPrice}
                        </s>
                        <small className="small">{item.orginalPrice}</small>
                      </div>
                    </Col>
                    <Col lg={6} md={6} sm={6} xs={6}>
                      <div className="enroll">
                        <Button className="btn" variant="primary">
                          Enroll Now
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </Card.Footer>
              </Card>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};
