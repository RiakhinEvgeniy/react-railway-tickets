import { useSelector } from 'react-redux';
import Apply from '../../components/apply/Apply';
import BillingInfo from '../../components/billinginfo/BillingInfo';
import SimpleButton from '../../components/buttons/SimpleButton';
import Food from '../../components/food/Food';
import Footer from '../../components/footer/Footer';
import Offers from '../../components/offers/Offers';
import Policy from '../../components/policy/Policy';
import Ticket from '../../components/ticket/Ticket';
import TotalCard from '../../components/totalcard/TotalCard';
import { useCounter } from '../../context/CounterOfPass';
import { selectAllFoodsArray } from '../../redux/selectors/foodSelectors';
import './ReviewBookingPage.scss';

function ReviewBookingPage() {
  const { valueCounter } = useCounter();
  const foods = useSelector(selectAllFoodsArray);

  function handleBookingSubmit(e: React.FormEvent) {
    e.preventDefault();
  }
  if (!foods) {
    return <div>Array of foods is empty!</div>;
  }
  return (
    <div className="review">
      <h2 className="review__title">Review your booking</h2>
      <div className="review__wraper">
        <div className="review__wraper__ticket">
          <Ticket />
        </div>
        <form
          onSubmit={handleBookingSubmit}
          className="review__wraper__form-review"
        >
          {valueCounter > 0 ? (
            Array.from({ length: valueCounter }).map((_, i) => (
              <div key={i} className="review__wraper__ticket">
                <BillingInfo numberOfPassanger={i} />
              </div>
            ))
          ) : (
            <h1 style={{ margin: '20px' }}>Не выбрано ни одного пассажира</h1>
          )}

          <div className="review__wraper__food">
            {foods.length > 0 ? (
              foods.map((food) => (
                <Food
                  key={food.id}
                  id={food.id}
                  imageUrl={food.image}
                  price={food.price}
                  nameOfDish={food.nameOfDish}
                  detailsOfDish={food.detailsOfDish}
                />
              ))
            ) : (
              <h2>There is no food</h2>
            )}
          </div>
          <div className="review__wraper__view-more">View More &gt;</div>
          <div className="review__wraper__offers">
            <Offers
              firstSale={'50% off up to $100 | Use code BOOKNOW'}
              secondtSale={'20% off | Use code FIRSTTIME'}
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
            <SimpleButton className="blue" text="Book Now" type="submit" />
            <SimpleButton className="transparent" text="Cancel" />
          </div>
        </form>
        <Policy />
      </div>
      <Footer />
    </div>
  );
}

export default ReviewBookingPage;
