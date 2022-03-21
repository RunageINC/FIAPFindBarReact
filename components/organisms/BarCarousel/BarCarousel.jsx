import Carousel from "react-bootstrap/Carousel";

import classes from './BarCarousel.module.css';

const BarCarousel = ({ barImageList }) => {
  return (
    <Carousel className="carousel-shadowing">
      {barImageList.map((barObject) => (
        <Carousel.Item key={barObject.id}>
          <img
            className={"d-block w-100 " + classes.barImages}
            src={barObject.img}
            alt={barObject.id}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default BarCarousel;