import {HYDRATE} from 'next-redux-wrapper'

import user from './user'
import post from './post'
import { combineReducers } from 'redux'

// combineReducers
// user와 post에서 export하는 것이 함수이기 때문에 사용


const rootReducer = combineReducers({
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE:
        console.log("HYDRATE", action);
        return {
          ...state,
          ...action.payload,
        };
      default:
        return state;
    }
  },
  user,
  post,
});

export default rootReducer;