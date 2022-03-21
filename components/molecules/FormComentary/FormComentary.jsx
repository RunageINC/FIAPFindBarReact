import { fiapURL } from '../../static/config';
import { useRef } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const FormComentary = () => {
  const commentRef = useRef();
  const url = fiapURL + "/comentarios"

  const onSubmitFormHandle = (event) => {
    const formData = {
        text: event.target.value,
    }
  }


  return (
    <Form onSubmit={onSubmitFormHandle}>
      <Row>
        <Col sm="10">
          <Form.Control 
            type="text" 
            name="comment" 
            id="comment" 
            placeholder="Insira seu comentário" 
            ref={commentRef}/>
        </Col>
        <Col sm="2">
          <Button type="submit">Postar</Button>
        </Col>
      </Row>
    </Form>
  );
};

export default FormComentary;
