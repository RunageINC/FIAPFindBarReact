import Card from "react-bootstrap/Card";

import SmallTextDecoration from "../../atoms/SmallTextDecoration/SmallTextDecoration";


const TagList = ({ tagList }) => {
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
    </Card>
  );
};

export default TagList;
