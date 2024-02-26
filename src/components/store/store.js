import { configureStore} from "@reduxjs/toolkit";
import {useDispatch} from "react-redux";
import MessagesReducer from "./query/Messages";
import sendquery from "./query/sendquery";
import latexstore from "./query/latexstore";


export const store = configureStore({
    reducer : {
        msgs : MessagesReducer,
        query : sendquery,
        latex : latexstore
    }
})

