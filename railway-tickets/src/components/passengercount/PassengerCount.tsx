import { IoMdPersonAdd } from "react-icons/io";
import { useCounter } from "../../context/CounterOfPass";
import "./PassengerCount.scss";

function PassengerCount() {
  const { valueCounter, increaseCounter, decreaseCounter } = useCounter();

  const increasePassenger = () => {
    if (valueCounter <= 7) {
      increaseCounter();
    }
  };

  const decreasePassenger = () => {
    if (valueCounter >= 1) {
      decreaseCounter();
    }
  };

  return (
    <div className="passcount">
      <IoMdPersonAdd color="#5e4ae3" size={30} />
      <span
        onClick={decreasePassenger}
        className="passcount__btn"
        style={{ color: "#808180" }}
      >
        -
      </span>
      <span className="passcount__count">{valueCounter}</span>
      <span
        onClick={increasePassenger}
        className="passcount__btn"
        style={{ color: "#5E4AE3" }}
      >
        +
      </span>
    </div>
  );
}

export default PassengerCount;
