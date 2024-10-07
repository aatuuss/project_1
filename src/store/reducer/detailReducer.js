const nilaiDefault = {
    data: {},
}

const detailReducer = (state = nilaiDefault, action) => {
    switch (action.type) {
        case SET_DATA:
            return {
                ...state,
                data: action.payload,
            };
            default:
                return state;
    };
};