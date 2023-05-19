import {fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";

export const baseQuery = fetchBaseQuery({
    baseUrl: process.env.REACT_APP_URL,
    headers: {
        "X-API-KEY":"5HNR12Z-XW64Y2D-K9092KT-21Y28Q9",
    },
});