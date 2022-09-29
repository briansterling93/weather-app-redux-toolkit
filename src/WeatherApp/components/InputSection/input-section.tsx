import { InputWrapper } from "./styles";
import * as React from "react";
import { useDispatch } from "react-redux";
import { setCityQuery } from "../../store/queryWeatherSlice/queryWeatherSlice";

const InputSection = (): JSX.Element => {
  const dispatch = useDispatch();
  const [city, setCity] = React.useState<string>("");
  const cityInputRef = React.useRef(null);
  return (
    <InputWrapper>
      <input
        ref={cityInputRef}
        value={city}
        placeholder="Enter a city"
        onChange={(e) => {
          setCity(e.target.value);
          // @ts-ignore: Object is possibly 'null'.
          dispatch(setCityQuery(cityInputRef.current.value));
        }}
      />
    </InputWrapper>
  );
};

export default InputSection;
