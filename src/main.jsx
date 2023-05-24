import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux"; //модуль для связки компнентов реакта с редаксом
import { store } from "./store/index.js";

//* action - js объект с полем type,
//type - определяет как состояние будет изменяться
// payload - поле для передачи любого количество данных
// action = { type: "", payload: "?" };

//* state - объект(чаще всего), либо  массив, либо примитив, который хранит данные
//дефолтное состояние присваивается в тот момент когда пользователь открыл приложение и каждый раз когда в диспатч будем прокидывать экшн, состояние будет изменяться и храниться в store до тех пор, пока страница либо не обновится, либо не закроет приложение

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
