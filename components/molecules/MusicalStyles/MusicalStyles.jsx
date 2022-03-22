import Card from 'react-bootstrap/Card';

import BarType from "../../atoms/BarType/BarType";
import BarLiveMusic from "../../atoms/BarLiveMusic/BarLiveMusic";

import classes from './MusicalStyles.module.css';

const MusicalStyles = ({type, hasLiveMusic, musicalStyles }) => {
  <Card body className="mt-3">
    <BarType type={type} musicalStyles={musicalStyles}/>
    <BarLiveMusic hasLiveMusic={hasLiveMusic} />
  </Card>;
};
