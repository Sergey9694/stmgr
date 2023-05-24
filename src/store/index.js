import { createStore } from "redux";
import { cashReducer } from "./cashReducer";

//* store - объект с методами (получиться состояние, изменить состояние, подписка на изменение состояния)
export const store = createStore(cashReducer);
