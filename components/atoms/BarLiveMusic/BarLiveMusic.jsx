import classes from "./BarLiveMusic.module.css";

const BarLiveMusic = ({ hasLiveMusic }) => {
  return (
    <section className="bar-type">
      <h3>
        Música ao vivo:
        {hasLiveMusic ? (
          <span className={"material-icons " + classes.musicTrue}> done </span>
        ) : (
          <span className={"material-icons " + classes.musicFalse}>
            {" "}
            clear{" "}
          </span>
        )}
      </h3>
    </section>
  );
};

export default BarLiveMusic;
