import Apply from "../../components/apply/Apply";
import BillingInfo from "../../components/billinginfo/BillingInfo";
import Food from "../../components/food/Food";
import Offers from "../../components/offers/Offers";
import Ticket from "../../components/ticket/Ticket";
import imagesUrl from "../../data/imagesUrl";
import "./ReviewBookingPage.scss";

function ReviewBookingPage() {
  return (
    <div className="review">
      <h2 className="review__title">Review your booking</h2>
      <div className="review__wraper">
        <Ticket />
        <BillingInfo />
        <div className="review__wraper__food">
          <Food
            imageUrl={imagesUrl[0]}
            price="$200"
            menu1="Paneer ticka Rice"
            menu2="Bowl - Mini"
          />
          <Food
            imageUrl={imagesUrl[1]}
            price="$500"
            menu1="Grilled Tandoori Chicken"
            menu2="With dry fruits"
          />
          <Food
            imageUrl={imagesUrl[2]}
            price="$700"
            menu1="Aloo Paratha Curd"
            menu2="Meal (2 pcs)"
          />
        </div>
        <div className="review__wraper__view-more">View More &gt;</div>
        <div className="review__wraper__offers">
          <Offers
            firstSale={"50% off up to $100 | Use code BOOKNOW"}
            secondtSale={"20% off | Use code FIRSTTIME"}
          />
        </div>
        <div className="review__wraper__apply-container">
          <Apply />
        </div>
      </div>
    </div>
  );
}

export default ReviewBookingPage;
