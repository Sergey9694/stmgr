const defaultState = {
    customer: [],
};

// Добавление клиентов с писок и для получения всех клиентов
export const customerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "ADD_CUSTOMER":
            return { ...state, customer: [...state.customer, action.payload] };
        case "REMOVE_CUSTOMER":
            return {
                ...state,
                customer: state.customer.filter(
                    (customer) => customer.id !== action.payload
                ),
            };
        // если пришел экшн с типом который не обрабатывается ни в 1 кейсе, то возвращаем неизмененное состояние(то которое есть на текущий момент)
        default:
            return state;
    }
};
