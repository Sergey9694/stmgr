import { createStore, combineReducers } from "redux"; //комбинируем редьюсеры для передачи в стор
import { cashReducer } from "./cashReducer";
import { customerReducer } from "./customerReducer";

//корневой редьюсер объединяющий оба редьюсера
const rootReducer = combineReducers({
    cash: cashReducer,
    customer: customerReducer,
});

//* store - объект с методами (получиться состояние, изменить состояние, подписка на изменение состояния)

// для удобства разработки необходимо отслеживать изменение стейтса, для этого в стор можно передать 2-ым параметром как middleware, так и инструменты разработчика
const devToolRedux = window._REDUX_DEVTOOLS_EXTENSION_
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : (f) => f;
export const store = createStore(rootReducer, devToolRedux); // передали оба редьюсера в стор
