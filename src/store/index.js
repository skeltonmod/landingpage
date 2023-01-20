import { configureStore } from "@reduxjs/toolkit";
import { challengeSlice } from "./providers/challengeSlice";

const store = configureStore({
  reducer: {
    challenge: challengeSlice
  }
});

export default store;
