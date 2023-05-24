import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createStore } from "redux";
import { Provider } from "react-redux"; //модуль для связки компнентов реакта с редаксом

//* action - js объект с полем type,
//type - определяет как состояние будет изменяться
// payload - поле для передачи любого количество данных
// action = { type: "", payload: "?" };

//* state - объект(чаще всего), либо  массив, либо примитив, который хранит данные
//дефолтное состояние присваивается в тот момент когда пользователь открыл приложение и каждый раз когда в диспатч будем прокидывать экшн, состояние будет изменяться и храниться в store до тех пор, пока страница либо не обновится, либо не закроет приложение
const defaultState = {
    cash: 0,
};

//* reducer - js функция принмает состояние и экшн
const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case "ADD_CASH":
            return { ...state, cash: state.cash + action.payload };
        case "GET_CASH":
            return { ...state, cash: state.cash - action.payload };
        // если пришел экшн с типом который не обрабатывается ни в 1 кейсе, то возвращаем неизмененное состояние(то которое есть на текущий момент)
        default:
            return state;
    }
};

//* store - объект с методами (получиться состояние, изменить состояние, подписка на изменение состояния)
const store = createStore(reducer);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
