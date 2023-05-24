import { createStore, combineReducers } from "redux"; //комбинируем редьюсеры для передачи в стор
import { cashReducer } from "./cashReducer";
import { customerReducer } from "./customerReducer";

//корневой редьюсер объединяющий оба редьюсера
const rootReducer = combineReducers({
    cash: cashReducer,
    customer: customerReducer,
});

//* store - объект с методами (получиться состояние, изменить состояние, подписка на изменение состояния)
export const store = createStore(rootReducer); // передали оба редьюсера в стор
