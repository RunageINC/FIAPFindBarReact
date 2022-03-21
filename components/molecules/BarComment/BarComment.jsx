import classes from "./BarComment.module.css";

const BarComment = ({ mensagem, avaliacao, hasComment }) => {
  return hasComment ? (
    <div className={classes.comment}>
      <p>{mensagem}</p>
      <p>
        {_.times(avaliacao, (i) => {
          return (
            <span key={i} className={"material-icons " + classes.star}>
              star
            </span>
          );
        })}
      </p>
    </div>
  ) : (
    <p className={classes.commentMuted}>
        Sem comentários ainda
    </p>
  );
};

export default BarComment;