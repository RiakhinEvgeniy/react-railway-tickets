import { useState } from "react";
import BillingInputs from "../inputs/BillingInputs";
import "./PayInput.scss";

function PayInput() {
  const [cardOfNum, setCardOfNum] = useState("");
  const [dateExpire, setDateExpire] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [cvc, setCvc] = useState("");
  return (
    <div className="payinput">
      <div className="payinput__card-expire">
        <BillingInputs
          label="Card Number"
          type="numeric"
          value={cardOfNum}
          onChange={setCardOfNum}
          placeholder="0000 0000 0000 0000"
          name="card"
          required
        />
        <BillingInputs
          label="Exparation Date"
          type="text"
          value={dateExpire}
          onChange={setDateExpire}
          placeholder="MM/YY"
          name="expire"
          required
        />
      </div>
      <div className="payinput__card-expire">
        <BillingInputs
          label="Cardholder"
          type="text"
          value={cardHolder}
          onChange={setCardHolder}
          placeholder="Cardholder Name"
          name="cardholder"
          required
        />
        <BillingInputs
          label="CVC"
          type="text"
          value={cvc}
          onChange={setCvc}
          placeholder="CVC"
          name="cvc"
          required
        />
      </div>
    </div>
  );
}

export default PayInput;
