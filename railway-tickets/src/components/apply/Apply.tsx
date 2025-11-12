import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../../redux/store';
import { addBaggage, type Baggage } from '../../redux/baggageSlice';
import './Apply.scss';
import { isApplyCode } from '../../util/discountUtil';
import {
  clearPromo,
  saveCurrentPromo,
  setPromoCode,
} from '../../redux/promoSlice';

function Apply() {
  const promoText = useSelector(
    (state: RootState) => state.promoData.currentPromo
  );
  const dispatch = useDispatch<AppDispatch>();

  const handleApply = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(saveCurrentPromo(e.target.value));
    if (isApplyCode(e.target.value)) {
      dispatch(setPromoCode(e.target.value));
    } else {
      dispatch(clearPromo());
    }
  };

  function addBaggageToTicket() {
    const newBaggage: Baggage = {
      priceOfBaggage: 240,
      isAdded: true,
    };

    dispatch(addBaggage(newBaggage));
  }

  return (
    <div className="apply-box">
      <div className="apply-box__code-bag">
        <h2 className="apply-box__code-bag__title">Apple Code</h2>
        <input
          name="code"
          type="text"
          className="apply-box__code-bag__field"
          placeholder="Enter code"
          value={promoText}
          onChange={(e) => handleApply(e)}
        />
      </div>
      <div className="apply-box__code-bag">
        <h2 className="apply-box__code-bag__title">Extra Baggage</h2>
        <button
          type="button"
          className="apply-box__code-bag__btn"
          onClick={addBaggageToTicket}
        >
          Add to ticket
        </button>
      </div>
    </div>
  );
}

export default Apply;
