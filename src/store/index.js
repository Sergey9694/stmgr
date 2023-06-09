// import { createStore, combineReducers, applyMiddleware } from "redux"; //комбинируем редьюсеры для передачи в стор
// import { cashReducer } from "./cashReducer";
// import { customerReducer } from "./customerReducer";
// import thunk from "redux-thunk";

// //корневой редьюсер объединяющий оба редьюсера
// const rootReducer = combineReducers({
//     cash: cashReducer,
//     customer: customerReducer,
// });

// //* store - объект с методами (получиться состояние, изменить состояние, подписка на изменение состояния)

// // для удобства разработки необходимо отслеживать изменение стейтса, для этого в стор можно передать 2-ым параметром как middleware, так и инструменты разработчика
// const devToolRedux = window._REDUX_DEVTOOLS_EXTENSION_
//     ? window.__REDUX_DEVTOOLS_EXTENSION__()
//     : (f) => f;
// export const store = createStore(
//     rootReducer, // передали оба редьюсера в стор
//     devToolRedux(applyMiddleware(thunk)) // middleware который позволяет внутри сторонних функций использовать dispatch
// );

import { applyMiddleware, combineReducers, createStore } from "redux";
import countReducer from "./countReducer";
import userReducer from "./userReducer";
import createSagaMiddleware from "redux-saga";
import { countWatcher } from "../saga/countSaga";
import { rootWatcher } from "../saga";

const sagaMiddleware = createSagaMiddleware(); // создаем миддлвайр, предварительно импортировав из redux saga

const rootReducer = combineReducers({
    countReducer,
    userReducer,
});

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware)); // передаем мидлвайре в функцию applyMiddleware

sagaMiddleware.run(rootWatcher); //запускаем передав нужный watcher
