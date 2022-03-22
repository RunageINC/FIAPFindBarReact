import { useState } from "react";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import BarCard from "../../molecules/BarCard/BarCard";
import BarCarousel from "../../organisms/BarCarousel/BarCarousel";
import BarInfo from "../../template/BarInfo/BarInfo";

import classes from './FrontPage.module.css';

const FrontPage = (props) => {
  const [modalShow, setModalShow] = useState(false);
  const { barList, barImageList } = props;
  const [chosenBar, setChosenBar] = useState(barList[0]);
  const [chosenBarComments, setChosenBarComments] = useState(barList[0].comentarios);
  const [chosenBarTags, setChosenBarTags] = useState(barList[0].tags);

  const randomImage = () => {
    const index = Math.floor(Math.random() * barImageList.length);

    return barImageList[index].img;
  };

  const onShow = async () => {
    setModalShow(true);
  }

  const onHide = async () => {
    setModalShow(false);
  };

  const handleBarChosen = (bar) => {
    setChosenBar(bar);
    setChosenBarComments(bar.comentarios);
    setChosenBarTags(bar.tags);
  }

  const onAddComment = (comentario) => {
    setChosenBarComments([...chosenBarComments, comentario]);
  }

  const onAddTag = (tag) => {
    setChosenBarTags([...chosenBarTags, tag]);
  }

  return (
    <Container className="mt-4">
      <Row>
        <BarCarousel barImageList={barImageList} />
      </Row>
      <Row className="mt-5">
          <h1 className={classes.title}>Explore os melhores bares:</h1>
      </Row>
      <Row>
        {barList.map((bar) => {
          const image = randomImage();

          return (
            <Col sm="3" key={bar.id + "col"} className="mt-2">
              <BarCard
                key={bar.id}
                bar={bar}
                onShow={onShow}
                handleBarChosen={handleBarChosen}
                img={image}
              />
            </Col>
          );
        })}
      </Row>
      <BarInfo 
        show={modalShow}
        onHide={onHide}
        barComments={chosenBarComments}
        barTags={chosenBarTags}
        onAddComment={onAddComment}
        onAddTag={onAddTag}
        bar={chosenBar}
        imageList={barImageList}/>
    </Container>
  );
};

export default FrontPage;
