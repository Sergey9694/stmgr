// Асинхронные запросы к внешнему API

import { addManyCustomersAction } from "../store/customerReducer";

// далее используем эту функцию на кнопке, для получения массива сотрудников
export const fetchCustomers = () => {
    // чтобы использовать эту функцию как эшн(прокинуть в dispatch), возвращаем новую функцию у которой параметр dispatch
    return function (dispatch) {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((json) => dispatch(addManyCustomersAction(json)));
    };
};
