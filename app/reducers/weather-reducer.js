// @flow

import {
  FETCH_DATA_ERROR,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
} from '../constants/action-names';

const initialState = {
  weatherInfo: {},
  isLoading: false,
  error: false,
};

export const getWeatherSelector = (state : Object) => ({ ...state.weather });

export default function (state : Object = initialState, action : Object) {
  switch (action.type) {
    case FETCH_DATA_SUCCESS: {
      return {
        isLoading: false,
        error: false,
        weatherInfo: action.payload.weatherInfo,
      };
    }
    case FETCH_DATA_REQUEST: {
      return {
        isLoading: true,
        error: false,
        weatherInfo: {},
      };
    }
    case FETCH_DATA_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    }
    default: {
      return state;
    }
  }
}