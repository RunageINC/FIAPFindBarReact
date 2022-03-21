import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import classes from './BarCard.module.css';

const BarCard = ({ bar, img, onHide, onHandleChosenBar }) => {
    const { nome, endereco } = bar;
    const { logradouro, numero, cep, bairro, cidade, estado } = endereco;

    const exploreBarAction = () => {
        onHandleChosenBar(bar);
        onHide();
    }

    return (
        <Card bg="dark" text="light" className={classes.interactiveCard}>
            <Card.Img variant="top" src={img} className={classes.cardImg}/>
            <Card.Body>
                <Card.Title>{nome}</Card.Title>
                <Card.Text>
                    <p>{logradouro + ' - ' + numero}</p>
                    <p>{cep}</p>
                    <p>{bairro + ' - ' + cidade + ', ' + estado}</p>
                </Card.Text>
            </Card.Body>
            <Button variant="light" bg="dark" onClick={exploreBarAction}>
                Explorar
            </Button>
        </Card>
    )
}

export default BarCard;