import { useDispatch, useSelector } from "react-redux";
import "./App.css";

function App() {
    //чтобы изменить состояние
    const dispatch = useDispatch();

    // Чтобы получить состояние
    const cash = useSelector((state) => state.cash.cash); //сюда передаем имя редьюсера.имя переменной
    const customers = useSelector((state) => state.customer.customer); //сюда передаем имя редьюсера.имя переменной

    console.log(cash);

    const addCash = (cash) => {
        // передаем в диспатч экшн
        dispatch({ type: "ADD_CASH", payload: cash });
    };
    const getCash = (cash) => {
        dispatch({ type: "GET_CASH", payload: cash });
    };

    const addCustomer = (name) => {
        const customer = {
            name,
            id: Date.now(),
        };
        dispatch({ type: "ADD_CUSTOMER", payload: customer });
    };

    const removeCustomer = (customer) => {
        dispatch({ type: "REMOVE_CUSTOMER", payload: customer.id });
    };

    return (
        <div className={"app"}>
            <div style={{ fontSize: "3rem" }}>{cash}</div>
            <div style={{ display: "flex" }}>
                <button onClick={() => addCash(Number(prompt()))}>
                    Пополнить счет
                </button>
                <button onClick={() => getCash(Number(prompt()))}>
                    Снять со счета
                </button>
                <button onClick={() => addCustomer(prompt())}>
                    Добавить клиента
                </button>
                <button onClick={() => getCash(Number(prompt()))}>
                    Удалить клиента
                </button>
            </div>
            {customers.length > 0 ? (
                <div>
                    {customers.map((customer) => (
                        <div
                            key={customer.id}
                            style={{
                                fontSize: "3rem",
                                border: "1px solid black",
                                padding: "10px",
                                margin: "10px",
                            }}
                            onClick={() => removeCustomer(customer)}
                        >
                            {customer.name}
                        </div>
                    ))}
                </div>
            ) : (
                <div style={{ fontSize: "3rem" }}>Клиенты отсутствуют</div>
            )}
        </div>
    );
}

export default App;
