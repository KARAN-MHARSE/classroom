import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userSlicer";

export const store = configureStore({ reducer: userReducer });
