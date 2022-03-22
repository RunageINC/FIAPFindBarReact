import Card from "react-bootstrap/Card";

const BarAddress = () => {
  return (
    <Card body>
      <section className="bar-address">
        <h4>Endereço: </h4>
        <p>{bar.endereco.logradouro + " " + bar.endereco.numero}</p>
        <p>{bar.endereco.cep}</p>
        <p>
          {bar.endereco.bairro +
            " - " +
            bar.endereco.cidade +
            " " +
            bar.endereco.estado}
        </p>
      </section>
    </Card>
  );
};

export default BarAddress;
