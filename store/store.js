import { createStore } from "redux";
import ImageReducers from "./reducer";
export const store = createStore(ImageReducers);