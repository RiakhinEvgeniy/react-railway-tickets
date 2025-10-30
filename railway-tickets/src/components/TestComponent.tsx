import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCities } from "../redux/citiesSlice";
import type { AppDispatch, RootState } from "../redux/store";

function TestComponent() {
  const [text, setText] = useState("");
  const [isClick, setIsClick] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();
  const citiesData = useSelector((state: RootState) => state.cityData.cities); // первый sities из store.ts; второй из sitiesSlice

  function handleTextInput(e: React.ChangeEvent<HTMLInputElement>) {
    setIsClick(true);
    setText((currentText) => (currentText = e.target.value));
  }

  function handleClickOnText(event: React.MouseEvent<HTMLHeadingElement>) {
    const cityFromH2: string = event.currentTarget.textContent;
    setText(cityFromH2);
    setIsClick(false);
  }

  const sortedCities = citiesData.filter((city) => {
    const matchesCity = city.name.toLowerCase().includes(text.toLowerCase());
    return matchesCity;
  });

  useEffect(() => {
    dispatch(fetchCities());
  }, [dispatch]);

  return (
    <div style={{ color: "black" }}>
      <label htmlFor="test">TEST: </label>
      <input
        type="text"
        placeholder="test"
        id="test"
        onChange={handleTextInput}
        value={text}
      />

      <div>
        {(isClick && text) &&
          sortedCities.map((city) => (
            <h2
              key={city.id}
              onClick={handleClickOnText}
              style={{ cursor: "pointer" }}
            >
              {city.name}
            </h2>
          ))}
      </div>
    </div>
  );
}

export default TestComponent;
