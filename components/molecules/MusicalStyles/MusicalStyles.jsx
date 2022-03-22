import Card from "react-bootstrap/Card";

import BarType from "../../atoms/BarType/BarType";
import BarLiveMusic from "../../atoms/BarLiveMusic/BarLiveMusic";

const MusicalStyles = ({ type, hasLiveMusic, musicalStyles }) => {
  return (
    <Card body className="mt-3">
      <BarType type={type} musicalStyles={musicalStyles} />
      <BarLiveMusic hasLiveMusic={hasLiveMusic} />
    </Card>
  );
};

export default MusicalStyles;
