import BillingInfo from "../../components/billinginfo/BillingInfo";
import Food from "../../components/food/Food";
import Ticket from "../../components/ticket/Ticket";
import "./ReviewBookingPage.scss";

function ReviewBookingPage() {
  return (
    <div className="review">
      <h2 className="review__title">Review your booking</h2>
      <div className="review__wraper">
        <Ticket />
        <BillingInfo />
        <div className="review__wraper__food">
          <Food />
          <Food />
          <Food />
        </div>
      </div>
    </div>
  );
}

export default ReviewBookingPage;
