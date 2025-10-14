import { IoMdPersonAdd } from "react-icons/io";
import { useState } from "react";
import "./PassengerCount.scss";

function PassengerCount() {
  const [countPassengers, setCountPassengers] = useState(0);

  const addPassenger = () => {
    if(countPassengers <=6) {
        setCountPassengers(countPassengers + 1);
    }
  };

  const decreasePassenger = () => {
    if (countPassengers >= 1) {
      setCountPassengers(countPassengers - 1);
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
      <span className="passcount__count">{countPassengers}</span>
      <span
        onClick={addPassenger}
        className="passcount__btn"
        style={{ color: "#5E4AE3" }}
      >
        +
      </span>
    </div>
  );
}

export default PassengerCount;
