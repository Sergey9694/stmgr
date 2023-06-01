// const defaultState = {
//     customer: [],
// };

// //хорошим правилом является выносить экшены в константы и в редбюсерах в кейсах использовать константы (если вдруг что-то неправильно, среда разработки поджскажет)
// const ADD_CUSTOMER = "ADD_CUSTOMER";
// const ADD_MANY_CUSTOMERS = "ADD_MANY_CUSTOMERS";
// const REMOVE_CUSTOMER = "REMOVE_CUSTOMER";

// // Добавление клиентов с писок и для получения всех клиентов
// export const customerReducer = (state = defaultState, action) => {
//     switch (action.type) {
//         case ADD_MANY_CUSTOMERS:
//             return {
//                 ...state,
//                 customer: [...state.customer, ...action.payload],
//             };

//         case ADD_CUSTOMER:
//             return { ...state, customer: [...state.customer, action.payload] };
//         case REMOVE_CUSTOMER:
//             return {
//                 ...state,
//                 customer: state.customer.filter(
//                     (customer) => customer.id !== action.payload
//                 ),
//             };
//         // если пришел экшн с типом который не обрабатывается ни в 1 кейсе, то возвращаем неизмененное состояние(то которое есть на текущий момент)
//         default:
//             return state;
//     }
// };

// //ФУНКЦИЯ ACTION Creator - вернет объект с типом экшна и данные которые передаются параметры
// export const addCustomerAction = (payload) => ({ type: ADD_CUSTOMER, payload });
// export const addManyCustomersAction = (payload) => ({
//     type: ADD_MANY_CUSTOMERS,
//     payload,
// });
// export const removeCustomerAction = (payload) => ({
//     type: REMOVE_CUSTOMER,
//     payload,
// });
