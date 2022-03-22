import Card from "react-bootstrap/Card";

import classes from "./BarWorkingTime.module.css";

const BarWorkingTime = ({ openHour, closeHour }) => {
  return (
    <Card body className="mt-3">
      <ul className={classes.modalList}>
        <li>
          <span className={"material-icons " + classes.opening}> timer </span>{" "}
          Abertura: {openHour}
        </li>
        <li>
          <span className={"material-icons " + classes.close}> timer_off </span>
          Encerramento: {closeHour}
        </li>
      </ul>
    </Card>
  );
};

export default BarWorkingTime;
