import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    asyncDecrementCreator,
    asyncIncrementCreator,
    decrementCreator,
    incrementCreator,
} from "./store/countReducer";
import { fetchUsers } from "./store/userReducer";

const App = () => {
    const count = useSelector((state) => state.countReducer.count);
    const users = useSelector((state) => state.userReducer.users);
    const dispatch = useDispatch();

    return (
        <div className="app">
            <div className="count">{count}</div>
            <div className="btns">
                <button
                    className="btn"
                    onClick={() => dispatch(asyncIncrementCreator())}
                >
                    ИНКРЕМЕНТ++
                </button>
                <button
                    className="btn"
                    onClick={() => dispatch(asyncDecrementCreator())}
                >
                    ДЕКРЕМЕНТ--
                </button>
                <button className="btn" onClick={() => dispatch(fetchUsers())}>
                    ПОЛУЧИТЬ ЮЗЕРОВ--
                </button>
            </div>
            <div className="users">
                {users.map((user) => (
                    <div className="user">{user.name}</div>
                ))}
            </div>
        </div>
    );
};

export default App;

// import { useDispatch, useSelector } from "react-redux";
// import "./App.css";
// import {
//     addCustomerAction,
//     removeCustomerAction,
// } from "./store/customerReducer";
// import { fetchCustomers } from "./asyncAction/customers";

// function App() {
//     //чтобы изменить состояние
//     const dispatch = useDispatch();

//     // Чтобы получить состояние
//     const cash = useSelector((state) => state.cash.cash); //сюда передаем имя редьюсера.имя переменной
//     const customers = useSelector((state) => state.customer.customer); //сюда передаем имя редьюсера.имя переменной

//     console.log(cash);

//     const addCash = (cash) => {
//         // передаем в диспатч экшн
//         dispatch({ type: "ADD_CASH", payload: cash });
//     };
//     const getCash = (cash) => {
//         dispatch({ type: "GET_CASH", payload: cash });
//     };

//     const addCustomer = (name) => {
//         const customer = {
//             name,
//             id: Date.now(),
//         };
//         dispatch(addCustomerAction(customer));
//     };

//     const removeCustomer = (customer) => {
//         dispatch(removeCustomerAction(customer.id));
//     };

//     return (
//         <div className={"app"}>
//             <div style={{ fontSize: "3rem" }}>{cash}</div>
//             <div style={{ display: "flex" }}>
//                 <button onClick={() => addCash(Number(prompt()))}>
//                     Пополнить счет
//                 </button>
//                 <button onClick={() => getCash(Number(prompt()))}>
//                     Снять со счета
//                 </button>
//                 <button onClick={() => addCustomer(prompt())}>
//                     Добавить клиента
//                 </button>
//                 <button onClick={() => dispatch(fetchCustomers())}>
//                     Получить клиентов из бэкенда
//                 </button>
//             </div>
//             {customers.length > 0 ? (
//                 <div>
//                     {customers.map((customer) => (
//                         <div
//                             key={customer.id}
//                             style={{
//                                 fontSize: "3rem",
//                                 border: "1px solid black",
//                                 padding: "10px",
//                                 margin: "10px",
//                             }}
//                             onClick={() => removeCustomer(customer)}
//                         >
//                             {customer.name}
//                         </div>
//                     ))}
//                 </div>
//             ) : (
//                 <div style={{ fontSize: "3rem" }}>Клиенты отсутствуют</div>
//             )}
//         </div>
//     );
// }

// export default App;
