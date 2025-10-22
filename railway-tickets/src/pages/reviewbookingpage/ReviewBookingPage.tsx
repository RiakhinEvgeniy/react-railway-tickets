import Apply from "../../components/apply/Apply";
import BillingInfo from "../../components/billinginfo/BillingInfo";
import SimpleButton from "../../components/buttons/SimpleButton";
import Food from "../../components/food/Food";
import Footer from "../../components/footer/Footer";
import Offers from "../../components/offers/Offers";
import Policy from "../../components/policy/Policy";
import Ticket from "../../components/ticket/Ticket";
import TotalCard from "../../components/totalcard/TotalCard";
import imagesUrl from "../../data/imagesUrl";
import "./ReviewBookingPage.scss";

function ReviewBookingPage() {
  return (
    <div className="review">
      <h2 className="review__title">Review your booking</h2>
      <div className="review__wraper">
        <div className="review__wraper__ticket">
          <Ticket />
        </div>
        <div className="review__wraper__ticket">
          <BillingInfo />
        </div>
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
        <div className="review__wraper__total">
          <TotalCard />
        </div>
        <span className="review__wraper__text">
          Discounts, offers and price concessions will be applied later during
          payment
        </span>
        <div className="review__wraper__btn">
          <SimpleButton className="blue" text="Book Now" />
          <SimpleButton className="transparent" text="Cancel" />
        </div>
        <Policy />
      </div>
      <Footer />
    </div>
  );
}

export default ReviewBookingPage;
