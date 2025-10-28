import { useState } from "react";
import RadioButton from "../../components/buttons/RadioButton";
import TextInput from "../../components/inputs/TextInput";
import DateInput from "../../components/inputs/DateInput";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import PassengerCount from "../../components/passengercount/PassengerCount";
import { useDispatch, useSelector } from "react-redux";
import { setForm, setTripType, type FormData, type TripType } from "../../redux/formSlice";
import type { AppDispatch, RootState } from "../../redux/storeForm";
import "./HomePage.scss";

function HomePage() {
  const initialFormData = useSelector((state: RootState) => state.form);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const { changeTheme } = useTheme();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const handleTripChange = (value: TripType) => {
    setFormData((prev) => ({
      ...prev,
      tripType: value,
    }));

    const trip: TripType = value;
    dispatch(setTripType(trip))
  }

    const handleInputChange = (name: keyof FormData, value: string | null) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // предотвращаю перезагрузку страницы

    const newDataForm: FormData = {
      tripType: formData.tripType,
      fromCity: formData.fromCity,
      toCity: formData.toCity,
      departureDate: formData.departureDate,
      returnDate: formData.returnDate,
    };

    dispatch(setForm(newDataForm));
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
              value={formData.tripType}
              checked={formData.tripType === "round"}
              onChange={() => handleTripChange("round")}
            >
              Round Trip
            </RadioButton>

            <RadioButton
              name="tripType"
              value={formData.tripType}
              checked={formData.tripType === "oneway"}
              onChange={() => handleTripChange("oneway")}
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
              placeholder="Where to?"
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

            {formData.tripType === "round" && (
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
            Ticket, Please!
          </button>
        </form>
      </div>
    </div>
  );
}

export default HomePage;
