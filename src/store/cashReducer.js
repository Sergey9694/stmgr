const defaultState = {
    cash: 0,
};

//* reducer - js функция принмает состояние и экшн
export const cashReducer = (state = defaultState, action) => {
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
