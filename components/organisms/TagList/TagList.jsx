import Card from "react-bootstrap/Card";

import Row from "react-bootstrap/Row";

import SmallTextDecoration from "../../atoms/SmallTextDecoration/SmallTextDecoration";
import FormTag from "../../molecules/FormTag/FormTag";

const TagList = ({ tagList, addTagHandler, barId }) => {
  return (
    <Card body className=" d-flex flex-row">
      
        {tagList.map((tag) => {
          return (
            <SmallTextDecoration
              key={Math.random(100)}
              text={tag.value}
              type="tag"
            />
          );
        })}
        <FormTag className="mt-3" addTagHandler={addTagHandler} barId={barId} />
      
    </Card>
  );
};

export default TagList;
