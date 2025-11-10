import { useState } from 'react';
import RadioButton from '../../components/buttons/RadioButton';
import TextInput from '../../components/inputs/TextInput';
import DateInput from '../../components/inputs/DateInput';
import GeneralCard from '../../components/generalcard/GeneralCard';
import Footer from '../../components/footer/Footer';
import PassengerCount from '../../components/passengercount/PassengerCount';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../../redux/store';
import {
  setTripType,
  type FormData,
  type TripType,
} from '../../redux/formSlice';
import filterTicketsByCities from '../../util/filterTickets';
import loadFoodsDataFromDB from '../../util/loadFoodsData';
import './SearchResultsPage.scss';

function SearchResultsPage() {
  const initialFormData = useSelector((state: RootState) => state.formData);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const dispatchTripType = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const avilableTickets = filterTicketsByCities();

  loadFoodsDataFromDB();

  const handleTripChange = (value: TripType) => {
    setFormData((prev) => ({
      ...prev,
      tripType: value,
    }));

    const trip: TripType = value;
    dispatchTripType(setTripType(trip));
  };

  const handleInputChange = (name: keyof FormData, value: string | null) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // предотвращаю перезагрузку страницы
    navigate('/review');
  };

  return (
    <div className="search-page">
      <h2 className="search-page__title">Search Results</h2>
      <div className="search-page__wraper">
        <form className="ticket-form" onSubmit={handleSubmit}>
          <div className="ticket-form__trip-type">
            <RadioButton
              name="tripType"
              value={formData.tripType}
              checked={formData.tripType === 'round'}
              onChange={() => handleTripChange('round')}
            >
              Round Trip
            </RadioButton>

            <RadioButton
              name="tripType"
              value={formData.tripType}
              checked={formData.tripType === 'oneway'}
              onChange={() => handleTripChange('oneway')}
            >
              One Way
            </RadioButton>
            <div>
              <PassengerCount />
            </div>
          </div>

          <div className="ticket-form__cities">
            <TextInput
              label="Departure:"
              value={formData.fromCity}
              onChange={(value) => handleInputChange('fromCity', value)}
              placeholder="Your City / Station"
              name="fromCity"
              required
            />

            <TextInput
              label="Arrival:"
              value={formData.toCity}
              onChange={(value) => handleInputChange('toCity', value)}
              placeholder="Where To?"
              name="toCity"
              required
            />
          </div>
          <div className="ticket-form__dates">
            <DateInput
              label="Pick your lucky day"
              value={formData.departureDate}
              onChange={(value) => handleInputChange('departureDate', value)}
              name="departureDate"
              required
            />

            {formData.tripType !== 'oneway' && (
              <DateInput
                label=""
                value={formData.returnDate}
                onChange={(value) => handleInputChange('returnDate', value)}
                name="returnDate"
                isReturnDate={true}
              />
            )}
          </div>

          <button type="submit" className="ticket-form__submit">
            Book
          </button>
        </form>
        <div className="search-page__wraper__for-images">
          <div className="search-page__wraper__for-images__image"></div>
          <div className="search-page__wraper__for-images__second-img"></div>
          <div className="search-page__wraper__text">
            <span>
              Our trains don't just transport people, they transport emotions
              and stories! From the mountains of Darjeeling to the beaches of
              Goa, we connect more than just stations. As Raj Koothrappali would
              say, "In India, we don't just ride trains, we experience cosmic
              journeys with occasional cow delays." Book now and embrace the
              colorful chaos!
            </span>
          </div>
        </div>
        <h1>Avilable Trains</h1>
        {avilableTickets.length > 0 ? (
          avilableTickets.map((ticket) => (
            <GeneralCard key={ticket.id} ticketData={ticket} />
          ))
        ) : (
          <p style={{ color: 'black', fontSize: '30px' }}>
            Билетов по вашему запросу не найдено.
          </p>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default SearchResultsPage;
