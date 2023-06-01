import { put, takeEvery } from "redux-saga/effects"; //put - своего рода dispatch для синхронных экшн (инкр декр и т.д.)
import {
    ASYNC_DECREMENT,
    ASYNC_INCREMENT,
    decrementCreator,
    incrementCreator,
} from "../store/countReducer";

// функция для искусственной задержки
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

//worker
function* incrementWorker() {
    // Перед каким-то асинхр действием пишем yield, работает похоже на async/await - след кусок кода не выполнится, пока не выполнится это асинхр действие
    yield delay(1000);
    yield put(incrementCreator());
}
//worker
function* decrementWorker() {
    // Перед каким-то асинхр действием пишем yield, работает похоже на async/await - след кусок кода не выполнится, пока не выполнится это асинхр действие
    yield delay(1000);
    yield put(decrementCreator());
}

//watcher
export function* countWatcher() {
    yield takeEvery(ASYNC_INCREMENT, incrementWorker); //сюда передаем тип экшна за которым следить и worker который должен отрабатывать когда экшн с типом который передан будет задиспатчен
    yield takeEvery(ASYNC_DECREMENT, decrementWorker); //сюда передаем тип экшна за которым следить и worker который должен отрабатывать когда экшн с типом который передан будет задиспатчен
}
