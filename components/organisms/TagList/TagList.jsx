import Card from "react-bootstrap/Card";

import Row from "react-bootstrap/Row";

import SmallTextDecoration from "../../atoms/SmallTextDecoration/SmallTextDecoration";
import FormTag from "../../molecules/FormTag/FormTag";

const TagList = ({ tagList, addTagHandler, barId }) => {
  return (
    <Card body className=" d-flex flex-row">
      <Row>
        {tagList.map((tag) => {
          return (
            <SmallTextDecoration
              key={Math.random(100)}
              text={tag.value}
              type="tag"
            />
          );
        })}
      </Row>
      <Row>
          <FormTag addTagHandler={addTagHandler} barId={barId} />
      </Row>
    </Card>
  );
};

export default TagList;
