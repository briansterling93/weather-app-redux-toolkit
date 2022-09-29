import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface QueryWeatherState {
  city: string;
}

const initialState: QueryWeatherState = {
  city: "",
};

//slice
export const queryWeatherSlice = createSlice({
  name: "queryWeather",
  initialState,
  reducers: {
    setCityQuery: (state: QueryWeatherState, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
    resetCityQuery: (state: QueryWeatherState) => {
      state.city = "";
    },
  },
});

//selector
export const getQueriedWeather = (state: RootState) => state.queryWeather.city;

//actions
export const { setCityQuery, resetCityQuery } = queryWeatherSlice.actions;

export default queryWeatherSlice.reducer;
