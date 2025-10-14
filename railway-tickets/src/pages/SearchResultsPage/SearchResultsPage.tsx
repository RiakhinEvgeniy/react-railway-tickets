import { useState } from "react";
import RadioButton from "../../components/buttons/RadioButton";
import TextInput from "../../components/inputs/TextInput";
import DateInput from "../../components/inputs/DateInput";
import "./SearchResultsPage.scss";
import GeneralCard from "../../components/generalcard/GeneralCard";

function SearchResultsPage() {
  const [tripType, setTripType] = useState<"oneway" | "round">("round");
  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  const handleTripChange = (value: string) => {
    setTripType(value as "oneway" | "round");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // предотвращаю перезагрузку страницы
    console.log({
      tripType,
      fromCity,
      toCity,
      departureDate,
      returnDate: tripType === "round" ? returnDate : null,
    });
    // Тут потом сделать редирект на / whatever
  };

  return (
    <div className="search-page">
      <h2 className="search-page__title">Search Results</h2>
      <div className="search-page__wraper">
        <form className="ticket-form" onSubmit={handleSubmit}>
          {/* здесь будет toggle, поля ввода, счётчик пассажиров */}

          <div className="ticket-form__trip-type">
            <RadioButton
              name="tripType"
              value="round"
              checked={tripType === "round"}
              onChange={handleTripChange}
            >
              Round Trip
            </RadioButton>

            <RadioButton
              name="tripType"
              value="oneway"
              checked={tripType === "oneway"}
              onChange={handleTripChange}
            >
              One Way
            </RadioButton>
          </div>

          <div className="ticket-form__cities">
            <TextInput
              label="Departure:"
              value={fromCity}
              onChange={setFromCity}
              placeholder="Your City / Station"
              name="fromCity"
              required
            />

            <TextInput
              label="Arrival:"
              value={toCity}
              onChange={setToCity}
              placeholder="Where To?"
              name="toCity"
              required
            />
          </div>
          <div className="ticket-form__dates">
            <DateInput
              label="Pick your lucky day"
              value={departureDate}
              onChange={setDepartureDate}
              name="departureDate"
              required
            />

            {tripType === "round" && (
              <DateInput
                label=""
                value={returnDate}
                onChange={setReturnDate}
                name="returnDate"
                isReturnDate={true}
              />
            )}
          </div>

          <button type="submit" className="ticket-form__submit">
            Ticket, Please!
          </button>
        </form>
        <div className="search-page__wraper__for-images">
          <div className="search-page__wraper__for-images__image"></div>
          <div className="search-page__wraper__for-images__second-img"></div>
          <div className="search-page__wraper__text">
            <span>Our trains don't just transport people, they transport emotions and 
              stories! From the mountains of Darjeeling to the beaches of Goa, 
              we connect more than just stations. As Raj Koothrappali would say, 
              "In India, we don't just ride trains, we experience cosmic journeys 
              with occasional cow delays." Book now and embrace the colorful chaos!</span>
          </div>
        </div>
        <h1>Avilable Trains</h1>
        <GeneralCard />
        <GeneralCard />
        <GeneralCard />
      </div>
    </div>
  );
}

export default SearchResultsPage;
