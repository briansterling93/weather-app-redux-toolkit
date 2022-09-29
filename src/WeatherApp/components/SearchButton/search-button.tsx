import { useSelector } from "react-redux";
import { getQueriedWeather } from "../../store/queryWeatherSlice/queryWeatherSlice";
import { SearchButtonWrapper } from "./styles";
import * as React from "react";

const SearchButton = (): JSX.Element => {
  const getQueriedCity = useSelector(getQueriedWeather);
  return (
    <SearchButtonWrapper>
      <button>Search</button>
      {getQueriedCity}
    </SearchButtonWrapper>
  );
};

export default SearchButton;
