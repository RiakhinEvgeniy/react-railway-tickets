import BillingInputs from '../inputs/BillingInputs';
import { useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';
import './BillingInfo.scss';

interface  NumberPassengerProps {
  numberOfPassanger: number | 0;
}

function BillingInfo({numberOfPassanger}: NumberPassengerProps) {
  const passengerData = useSelector((state: RootState) => state.passengerData);

  return (
    <div className="billinginfo">
      <div className="billinginfo__title">
        <h2>{`Passenger ${numberOfPassanger + 1}`}</h2>
        <span style={{ color: '#808180' }}>Please enter your contact info</span>
      </div>

      <div className="billinginfo__name-phone">
        <BillingInputs
          label="Full Name"
          type="text"
          value={passengerData.passenger.fullName}
          placeholder="Your name"
          autocomplete="name"
          name="fullName"
          required
        />
        <BillingInputs
          label="Phone Number"
          type="tel"
          value={passengerData.passenger.phoneNumber}
          placeholder="+049"
          autocomplete="tel"
          name="phoneNumber"
          required
        />
      </div>
      <div className="billinginfo__name-phone">
        <BillingInputs
          label="Email"
          type="email"
          value={passengerData.passenger.email}
          placeholder="email@company.com"
          autocomplete="email"
          name="email"
          required
        />
        <BillingInputs
          label="Date of birth"
          type="text"
          value={passengerData.passenger.dateOfBirth}
          placeholder="12.12.1970"
          autocomplete="dateOfBirth"
          name="dateOfBirth"
          required
        />
      </div>
    </div>
  );
}

export default BillingInfo;
