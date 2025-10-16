import { useState } from "react";
import BillingInputs from "../inputs/BillingInputs";
import "./BillingInfo.scss";

function BillingInfo() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [birth, setBirth] = useState("");
  return (
    <div className="billinginfo">
      <div className="billinginfo__title">
        <h2>Passanger 1</h2>
        <span style={{ color: "#808180" }}>Please enter your contact info</span>
      </div>

      <div className="billinginfo__name-phone">
        <BillingInputs
          label="Full Name"
          type="text"
          value={name}
          onChange={setName}
          placeholder="Your name"
          name="fromName"
          required
        />
        <BillingInputs
          label="Phone Number"
          type="tel"
          value={phoneNumber}
          onChange={setPhoneNumber}
          placeholder="+049"
          name="fromPhoneNumber"
          required
        />
      </div>
      <div className="billinginfo__name-phone">
        <BillingInputs
          label="Email"
          type="email"
          value={email}
          onChange={setEmail}
          placeholder="email@company.com"
          name="fromEmail"
          required
        />
        <BillingInputs
          label="Date of birth"
          type="text"
          value={birth}
          onChange={setBirth}
          placeholder="12.12.1970"
          name="fromBirth"
          required
        />
      </div>
    </div>
  );
}

export default BillingInfo;
