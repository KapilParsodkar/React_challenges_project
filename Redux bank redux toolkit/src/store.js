import { configureStore } from "@reduxjs/toolkit";
import Accountreducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";

const store = configureStore({
  reducer: {
    account: Accountreducer,
    customer: customerReducer,
  },
});

export default store;
