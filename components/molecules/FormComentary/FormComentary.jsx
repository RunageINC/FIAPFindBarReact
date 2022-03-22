import { fiapURL } from "../../static/config";
import { useRef } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const FormComentary = ({ barId, addCommentHandler }) => {
  const commentRef = useRef();
  const rateRef = useRef();
  const url = fiapURL + "/comentarios/bares/" + barId;

  const onSubmitFormHandle = async (event) => {
    event.preventDefault();

    const formData = {
      mensagem: commentRef.current.value,
      nota: rateRef.current.value,
    };

    try {
      await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          mensagem: formData.mensagem,
          nota: formData.nota,
        }),
      })

      addCommentHandler(formData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form onSubmit={onSubmitFormHandle}>
      <Row>
        <Col sm="8">
          <Form.Label htmlFor="comment">
            Comente o que achou:
          </Form.Label>
          <Form.Control
            required
            type="text"
            name="comment"
            id="comment"
            placeholder="Insira seu comentário"
            ref={commentRef}
          />
        </Col>
        <Col sm="2">
          <Form.Label htmlFor="rate">
            <span className="material-icons" style={{ color: "gold" }}>
              {" "}
              star{" "}
            </span>
          </Form.Label>
          <Form.Control
            required
            type="number"
            name="rate"
            id="rate"
            min="0"
            max="5"
            step="1"
            ref={rateRef}
          />
        </Col>
        <Col sm="2" className="mt-4">
          <Button type="submit">
            <span className="material-icons" style={{ color: "white" }}>
              {" "}
              send{" "}
            </span>
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default FormComentary;
