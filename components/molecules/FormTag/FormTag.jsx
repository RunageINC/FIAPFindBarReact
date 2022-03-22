import { fiapURL } from '../../static/config';
import { useRef } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const FormTag = ({ barId, addTagHandler }) => {
    const tagRef = useRef();
    const url = fiapURL + "/tags/bares/" + barId;

    const onSubmitFormHandle = async (event) => {
        event.preventDefault();

        try {
            await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    value: tagRef.current.value,
                }),
            });

            addTagHandler(tag);
        } catch (error) {
            console.log(error);
        }
    }   

    return (
        <Form onSubmit={onSubmitFormHandle}>
            <Row>
                <Col sm="8">
                    <Form.Control
                        required
                        type="text"
                        name="tag"
                        id="tag"
                        placeholder="Não encontrou a tag que queria? Adicione aqui!"
                        ref={tagRef}
                    />  
                </Col>
                <Col sm="2" className="gap-2">
                    <Button type="submit">
                        <span className="material-icons" style={{ color: "white" }}> send </span>
                    </Button>
                </Col>
            </Row>
        </Form>
    );
}

export default FormTag;