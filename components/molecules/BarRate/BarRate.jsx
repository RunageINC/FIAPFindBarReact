import Card from "react-bootstrap/Card";

import RateStar from '../../atoms/RateStar/RateStar';

const BarRate = ({ rating }) => {
  return (
    <Card body>
      <section className="bar-musical-rate">
        <h3>
          Avaliação <RateStar />: {rating}
        </h3>
      </section>
    </Card>
  );
};

export default BarRate;
