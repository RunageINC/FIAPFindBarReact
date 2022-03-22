import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import SmallTextDecoration from "../../atoms/SmallTextDecoration/SmallTextDecoration";
import FormComentary from "../../molecules/FormComentary/FormComentary";

import BarWorkingTime from "../../molecules/BarWorkingTime/BarWorkingTime";
import MusicalStyles from "../../molecules/MusicalStyles/MusicalStyles";
import BarAddress from "../../molecules/BarAddress/BarAddress";
import BarRate from "../../molecules/BarRate/BarRate";
import CommentList from "../../organisms/CommentList/CommentList";
import TagList from "../../organisms/TagList/TagList";

import classes from "./BarInfo.module.css";

const BarInfo = (props) => {
  const { bar, imageList, barComments, barTags, onAddComment, onAddTag } = props;
  const { estilos_musicais, endereco, avaliacao } = bar;

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
              <BarWorkingTime 
                openHour={bar.horario_abertura}
                closeHour={bar.horario_fechamento}
              />
            </Col>
            <Col>
              <MusicalStyles 
                type={bar.tipo}
                musicalStyles={estilos_musicais}
                hasLiveMusic={bar.musica_ao_vivo}
              />
            </Col>
          </Row>
          <Row className="mt-4">
            <BarAddress 
              address={endereco.logradouro}
              number={endereco.numero}
              district={endereco.bairro}
              city={endereco.cidade}
              state={endereco.estado}
              cep={endereco.cep}
            />
          </Row>
          <Row className="mt-4">
            <BarRate rating={avaliacao}/>
          </Row>
          <Row className="mt-4">
            <CommentList barComments={barComments} />
          </Row>
          <Row className="mt-4">
            <Card body>
              <FormComentary 
                barId={bar.id}
                addCommentHandler={addCommentHandler}
              />
            </Card>
          </Row>
          <Row className="mt-4">
            <TagList tagList={barTags} addTagHandler={addTagHandler} barId={bar.id}/>
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
