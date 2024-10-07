import { SET_AKUN } from "../action/akunAction";

const nilaiDefault = {
    akun: "admin"
};

const akunReducer = (state = nilaiDefault, action) => {
    switch (action.type){
        case SET_AKUN:
        return {
            ...state,
            akun: action.payload, 
        };
        default :
        return state;
}
};

export default akunReducer;