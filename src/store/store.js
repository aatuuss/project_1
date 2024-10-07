import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./reducer/themeReducer";
import langReducer from "./reducer/langReducer";
import akunReducer from "./reducer/akunReducer";
import detailReducer from "./reducer/detailReducer";

const store = configureStore({
    reducer :{
        theme: themeReducer,
        lang: langReducer,
        akun: akunReducer,
        detail: detailReducer,
    },
});

export default store;