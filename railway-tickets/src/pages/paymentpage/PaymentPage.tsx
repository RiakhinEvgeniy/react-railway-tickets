import { useState } from "react";
import Apply from "../../components/apply/Apply";
import RadioButton from "../../components/buttons/RadioButton";
import Offers from "../../components/offers/Offers";
import Ticket from "../../components/ticket/Ticket";
import TotalCard from "../../components/totalcard/TotalCard";
import TravellerDetails from "../../components/travellerdetails/TravellerDetails";
import Visa from "../../assets/Visa.png";
import Security from "../../assets/security.png";
import PayInput from "../../components/payinput/PayInput";
import "./PaymentPage.scss";
import SimpleButton from "../../components/buttons/SimpleButton";
import Footer from "../../components/footer/Footer";
import Policy from "../../components/policy/Policy";

type Pay = "credit" | "paypal" | "bitcoin";

function PaymentPage() {
  const [paySelect, setPaySelect] = useState<Pay>("credit");

  const handlePayChange = (value: string) => {
    setPaySelect(value as "credit" | "paypal" | "bitcoin");
  };

  return (
    <div className="payment">
      <div className="payment__wraper">
        <h2 className="payment__wraper__title">Pay $1744 to confirm booking</h2>
        <div className="payment__wraper__summary">
          <Ticket backgroundColor="lightgray" />
          <TravellerDetails
            travellerInfo={{
              name: "Evgeniy Riakhin",
              age: "45",
              email: "evgeniy@gmail.com",
            }}
          />
        </div>
        <div className="payment__wraper__offer">
          <Offers
            firstSale={"50% off up to $100 | Use code BOOKNOW"}
            secondtSale={"20% off | Use code FIRSTTIME"}
          />
        </div>
        <Apply />
        <div className="payment__wraper__totalcard">
          <TotalCard />
        </div>
        <div className="payment__wraper__pay-container">
          <h2 className="payment__wraper__pay-container__pay-title">
            Payment Method
          </h2>
          <span className="payment__wraper__text">
            Please enter your payment method
          </span>
          <div className="payment__wraper__pay-container__fields">
            <form className="payment__wraper__pay-container__fields__form">
              <div className="payment__wraper__pay-container__fields__form__radio_btn">
                <RadioButton
                  name="payment"
                  value="credit"
                  checked={paySelect === "credit"}
                  onChange={handlePayChange}
                >
                  Credit Card
                </RadioButton>
                <img src={Visa} alt="visa" />
              </div>
              <div className="payment__wraper__pay-container__fields__form__card-exparation">
                <PayInput />
              </div>
            </form>
            <div className="payment__wraper__pay-container__fields__radio_btn">
              <RadioButton
                name="payment"
                value="paypal"
                checked={paySelect === "paypal"}
                onChange={handlePayChange}
              >
                Pay Pal
              </RadioButton>
            </div>
            <div className="payment__wraper__pay-container__fields__radio_btn">
              <RadioButton
                name="payment"
                value="bitcoin"
                checked={paySelect === "bitcoin"}
                onChange={handlePayChange}
              >
                Bitcoin
              </RadioButton>
            </div>
            <div className="payment__wraper__pay-container__fields__security">
              <img src={Security} alt="security" />
              <h2>All your data are safe</h2>
            </div>
            <span className="payment__wraper__text">
              Discounts, offers and price concessions will be applied later
              during payment
            </span>
            <SimpleButton className="blue" text="Book Now" />
            <SimpleButton className="transparent" text="Cancel" />
          </div>
        </div>
        <Policy />
      </div>
      <Footer />
    </div>
  );
}

export default PaymentPage;
