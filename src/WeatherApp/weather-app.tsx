import { MainWrapper } from "./styles";
import { InputSection } from "./components/InputSection";
import { SearchButton } from "./components/SearchButton";

const WeatherApp = (): JSX.Element => {
  return (
    //My Components are broken down so thoroughly, due to the urge for fluid Redux Toolkit Usage
    <MainWrapper>
      <InputSection />
      <SearchButton />
    </MainWrapper>
  );
};

export default WeatherApp;
