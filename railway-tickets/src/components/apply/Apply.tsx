import { useDispatch } from 'react-redux';
import './Apply.scss';
import type { AppDispatch } from '../../redux/store';
import { addBaggage, type Baggage } from '../../redux/baggageSlice';

function Apply() {
  const dispatch = useDispatch<AppDispatch>();

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
