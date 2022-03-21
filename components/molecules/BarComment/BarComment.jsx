import classes from "./BarComment.module.css";

const BarComment = ({ mensagem, nota, hasComment }) => {
  const rateHandler = () => {
    let stars = [];

    for (var i = 0; i < nota; i++) {
      stars.push(
        <span key={i} className={"material-icons " + classes.star}>
          star
        </span>
      );
    }

    return stars;
  };

  return hasComment ? (
    <div className={classes.comment}>
      <p>{mensagem}</p>
      <p>
        {rateHandler().map((rating) => {
          return rating;
        }
        )}
      </p>
    </div>
  ) : (
    <p className={classes.commentMuted}>Sem comentários ainda</p>
  );
};

export default BarComment;
