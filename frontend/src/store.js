import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import { userLoginSuccess } from "./actions/user.actions";

const store = configureStore({
  reducer: rootReducer,
});

const token = localStorage.getItem("token");
if (token) {
  store.dispatch(userLoginSuccess(token));
}

export default store;
