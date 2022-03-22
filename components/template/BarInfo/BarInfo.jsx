import { useState } from 'react';

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import SmallTextDecoration from "../../atoms/SmallTextDecoration/SmallTextDecoration";
import FormComentary from "../../molecules/FormComentary/FormComentary";
import BarComment from "../../molecules/BarComment/BarComment";

import classes from "./BarInfo.module.css";

const BarInfo = (props) => {
  const { bar, imageList, barComments, barTags, onAddComment, onAddTag } = props;
  const { estilos_musicais } = bar;

  const randomImage = () => {
    const index = Math.floor(Math.random() * imageList.length);

    return imageList[index].img;
  };

  const addCommentHandler = (comment) => {
    onAddComment(comment);
  }

  const addTagHandler = (tag) => {
    onAddTag(tag);
  }

  const chosenImage = randomImage();

  return (
    <Modal
      size="lg"
      aria-labelledby="container-modal-title-vcenter"
      centered
      show={props.show}
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          <h1>{bar.nome}</h1>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <img
              className={classes.modalImage}
              src={chosenImage}
              alt="bar-img"
            />
          </Row>
          <Row>
            <Col>
              <Card body className="mt-3">
                <ul className={classes.modalList}>
                  <li>
                    <span className={"material-icons " + classes.opening}>
                      {" "}
                      timer{" "}
                    </span>{" "}
                    Abertura: {bar.horario_abertura}
                  </li>
                  <li>
                    <span className={"material-icons " + classes.close}>
                      {" "}
                      timer_off{" "}
                    </span>
                    Encerramento: {bar.horario_fechamento}
                  </li>
                </ul>
              </Card>
            </Col>
            <Col>
              <Card body className="mt-3">
                <section className="bar-type">
                  <h4>Tipo: {bar.tipo}</h4>
                </section>
                <section className="bar-musical-styles">
                  {estilos_musicais.map((style) => (
                    <SmallTextDecoration
                      key={Math.random(100)}
                      text={style}
                      type="music"
                    />
                  ))}
                </section>
                <section className="bar-type">
                  <h3>
                    Música ao vivo:
                    {bar.musica_ao_vivo ? (
                      <span className={"material-icons " + classes.musicTrue}>
                        {" "}
                        done{" "}
                      </span>
                    ) : (
                      <span className={"material-icons " + classes.musicFalse}>
                        {" "}
                        clear{" "}
                      </span>
                    )}
                  </h3>
                </section>
              </Card>
            </Col>
          </Row>
          <Row className="mt-4">
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
          </Row>
          <Row className="mt-4">
            <Card body>
              <section className="bar-musical-rate">
                <h3>
                  Avaliação:
                  <span className={"material-icons " + classes.star}>
                    {" "}
                    star{" "}
                  </span>
                  <span className={"material-icons " + classes.star}>
                    {" "}
                    star{" "}
                  </span>
                  <span className={"material-icons " + classes.star}>
                    {" "}
                    star{" "}
                  </span>
                </h3>
              </section>
            </Card>
          </Row>
          <Row className="mt-4">
            <Card body>
              {barComments.length > 0 ? (
                barComments.map((comment) => (
                  <BarComment 
                    mensagem={comment.mensagem}
                    key={Math.random(100)}
                    hasComment={true}
                    nota={comment.nota}
                  />
                ))
              ) : (
                <BarComment 
                    mensagem=""
                    key={Math.random(100)}
                    hasComment={false}
                    nota=""
                  />
              )}
            </Card>
          </Row>
          <Row className="mt-4">
            <Card body className=" d-flex flex-row">
              <SmallTextDecoration
                key={Math.random(100)}
                text="tag1"
                type="tag"
                className="gap-3"
              />
              <SmallTextDecoration
                key={Math.random(100)}
                text="tag2"
                type="tag"
                className="gap-3"
              />
              <SmallTextDecoration
                key={Math.random(100)}
                text="tag3"
                type="tag"
                className="gap-3"
              />
              <SmallTextDecoration
                key={Math.random(100)}
                text="tag4"
                type="tag"
                className="gap-3"
              />
            </Card>
          </Row>
          <Row className="mt-4">
            <Card body>
              <FormComentary 
                barId={bar.id}
                addCommentHandler={addCommentHandler}
              />
            </Card>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default BarInfo;
