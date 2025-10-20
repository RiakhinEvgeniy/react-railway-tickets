import Apply from "../../components/apply/Apply";
import Offers from "../../components/offers/Offers";
import Ticket from "../../components/ticket/Ticket";
import TotalCard from "../../components/totalcard/TotalCard";
import TravellerDetails from "../../components/travellerdetails/TravellerDetails";
import "./PaymentPage.scss";

function PaymentPage() {
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
        <div className="payment__wraper__totalcard">
          <h2>Payment Method</h2>
          <span className="payment__wraper__text">
            Please enter your payment method
          </span>
        </div>
      </div>
    </div>
  );
}

export default PaymentPage;
