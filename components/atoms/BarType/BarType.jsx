import SmallTextDecoration from "../SmallTextDecoration/SmallTextDecoration";

const BarType = ({ type, musicalStyles }) => {
  return (
    <div>
      <section className="bar-type">
        <h4>Tipo: {type}</h4>
      </section>
      <section className="bar-musical-styles">
        {musicalStyles.map((style) => (
          <SmallTextDecoration
            key={Math.random(100)}
            text={style}
            type="music"
          />
        ))}
      </section>
    </div>
  );
};

export default BarType;
