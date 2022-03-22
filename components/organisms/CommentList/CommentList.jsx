import Card from "react-bootstrap/Card";

import BarComment from "../../molecules/BarComment/BarComment";

const CommentList = ({ barComments }) => {
  return (
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
  );
};

export default CommentList;
