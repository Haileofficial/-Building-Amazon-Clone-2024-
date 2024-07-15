import actionTypes from './action.type';


export const intialState = {
    basket: []
};

export const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_BASKET:
            return {
                ...state, basket:[...state.basket, action.item]
            };
        default:
            return state;
    }
};



export default reducer;