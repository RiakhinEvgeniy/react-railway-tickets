import { useState } from "react";
import RadioButton from "../../components/buttons/RadioButton";
import TextInput from "../../components/inputs/TextInput";
import DateInput from "../../components/inputs/DateInput";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import PassengerCount from "../../components/passengercount/PassengerCount";
import { useDispatch } from "react-redux";
import "./HomePage.scss";
import { setForm, type FormData } from "../../redux/formSlice";
import type { AppDispatch } from "../../redux/storeForm";

function HomePage() {
  const [tripType, setTripType] = useState<"oneway" | "round">("round");
  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const { changeTheme } = useTheme();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

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

    const newDataForm: FormData = {
      tripType: tripType,
      fromCity: fromCity,
      toCity: toCity,
      departureDate: departureDate,
      returnDate: returnDate,
    }

    dispatch(setForm(newDataForm));
    console.log("New object from dispatch: ", newDataForm);
    

    changeTheme();
    navigate("/search");
  };

  return (
    <div className="home-page">
      <div className="home-page__wrapper">
        <header className="home-page__header">
          <h1>Let’s Find That Ticket</h1>
          <p>before someone else does</p>
        </header>

        <form className="ticket-form" onSubmit={handleSubmit}>
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
            <div>
              <PassengerCount />
            </div>
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
              placeholder="Where to?"
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
      </div>
    </div>
  );
}

export default HomePage;
