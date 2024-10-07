import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./reducer/themeReducer";
import langReducer from "./reducer/langReducer";
import akunReducer from "./reducer/akunReducer";

const store = configureStore({
    reducer :{
        theme: themeReducer,
        lang: langReducer,
        akun: akunReducer,
    },
});

export default store;