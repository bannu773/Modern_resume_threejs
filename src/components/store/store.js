import { configureStore} from "@reduxjs/toolkit";
import {useDispatch} from "react-redux";
import MessagesReducer from "./query/Messages";
import sendquery from "./query/sendquery";


export const store = configureStore({
    reducer : {
        msgs : MessagesReducer,
        query : sendquery
    }
})

