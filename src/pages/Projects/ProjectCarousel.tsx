import React from "react";
import "../../styles/ProjectDetails.scss";
import { Carousel } from "react-bootstrap";

interface CarouselItem {
  image: string;
}

const ProjectCarousel = (props: { carousel: CarouselItem[] }) => {
  const { carousel } = props;
  const intervalTime = 5000;

  return (
    <Carousel>
      {carousel.map((item, index) => (
        <Carousel.Item
          className={`carousel-item ${index === 0 ? "active" : ""}`}
          key={index}
          data-interval={intervalTime}
        >
          <img
            src={item.image}
            className="d-block w-100 img-fluid"
            alt={`Slide ${index + 1}`}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ProjectCarousel;
