import { useState } from 'react';
import './HomePage.scss';
import RadioButton from '../../components/Buttons/RadioButton';

function HomePage() {

    const [tripType, setTripType] = useState<'oneway' | 'round'>('round');
    const [fromCity, setFromCity] = useState('');
    const [toCity, setToCity] = useState('');
    const [departureDate, setDepartureDate] = useState('');
    const [returnDate, setReturnDate] = useState('');

    const handleTripChange = (value: string) => {
        setTripType(value as 'oneway' | 'round');
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); // предотвращаю перезагрузку страницы
        console.log({ tripType, fromCity, toCity, departureDate, returnDate: tripType === 'round' ? returnDate : null });
        // Тут потом будет редирект на /search
    };

    return (
        <div className="home-page">
            <div className="home-page__wrapper">

                <header className="home-page__header">
                    <h1>Let’s Find That Ticket</h1>
                    <p>before someone else does</p>
                </header>

                <form className="ticket-form" onSubmit={handleSubmit}>
                    {/* здесь будет toggle, поля ввода, счётчик пассажиров */}

                    <div className="ticket-form__trip-type">
                        {/* <label>
                            <input
                                type="radio"
                                name="tripType"
                                value="round"
                                checked={tripType === 'round'}
                                onChange={() => handleTripChange('round')}
                            />
                            Round Trip
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="tripType"
                                value="oneway"
                                checked={tripType === 'oneway'}
                                onChange={() => handleTripChange('oneway')}
                            />
                            One Way
                        </label>
                    </div> */}

                        <RadioButton
                            name="tripType"
                            value="round"
                            checked={tripType === 'round'}
                            onChange={handleTripChange}
                        >
                            Round Trip
                        </RadioButton>

                        <RadioButton
                            name="tripType"
                            value="oneway"
                            checked={tripType === 'oneway'}
                            onChange={handleTripChange}
                        >
                            One Way
                        </RadioButton>
                </div>

                    <div className="ticket-form__cities">
                        <label>
                            Departure:
                            <input
                                type="text"
                                name='city'
                                placeholder="From"
                                value={fromCity}
                                onChange={(e) => setFromCity(e.target.value)}
                            />
                        </label>

                        <label>
                            Arrival
                            <input
                                type="text"
                                name='city'
                                placeholder="To"
                                value={toCity}
                                onChange={(e) => setToCity(e.target.value)}
                            />
                        </label>
                    </div>

                    <div className="ticket-form__dates">
                        <label>
                            Pick your lucky day
                            <input
                                type="date"
                                name='date'
                                value={departureDate}
                                onChange={(e) => setDepartureDate(e.target.value)}
                            />
                        </label>

                        {tripType === 'round' && (
                            <label>
                                <input
                                id='return-date'
                                    type='date'
                                    name='date'
                                    value={returnDate}
                                    onChange={(e) => setReturnDate(e.target.value)}
                                />
                            </label>
                        )}
                    </div>

                    <button type="submit" className="ticket-form__submit">
                        Ticket, Please!
                    </button>
                </form>
            </div>
        </div>
    );
}

export default HomePage;
