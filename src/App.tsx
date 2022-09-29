import { createGlobalStyle } from "styled-components";
import { Provider } from "react-redux";
import { WeatherApp } from "./WeatherApp";
import { store } from "./WeatherApp/store/store";

const Universal = createGlobalStyle`
 body {
    display: flex;
    justify-content: center;
    padding: 0;
    box-sizing: none;
    margin: 0;
    background-color: #f6f6f6;

    button {
      cursor: pointer;
    }
  }
`;

function App() {
  return (
    <div className="App">
      <Universal />
      <Provider store={store}>
        <WeatherApp />
      </Provider>
    </div>
  );
}

export default App;
