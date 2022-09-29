import { configureStore } from "@reduxjs/toolkit";
import queryWeatherReducer from "./queryWeatherSlice/queryWeatherSlice";

export const store = configureStore({
  reducer: {
    queryWeather: queryWeatherReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
