import { SET_DATA } from  "../action/detailAction";

const nilaiDefault = {
    data: {},
}

const detailReducer = (state = nilaiDefault, action) => {
    switch (action.type) {
        case SET_DATA:
            return{
                ...state,
                data: action.payload,
            };
            default:
                return state;
    }
};

export default detailReducer;