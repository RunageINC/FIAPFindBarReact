import Card from "react-bootstrap/Card";

const BarAddress = ({ address, number, district, city, state, cep }) => {
  return (
    <Card body>
      <section className="bar-address">
        <h4>Endereço: </h4>
        <p>{address + " " + number}</p>
        <p>{cep}</p>
        <p>
          {district +
            " - " +
            city +
            " " +
            state}
        </p>
      </section>
    </Card>
  );
};

export default BarAddress;
