import {createApi} from "@reduxjs/toolkit/query/react";
import {IGetParams, IResponseMovie} from "interfaces";
import {baseQuery} from "../config/api";





export const movieAPI = createApi({
    reducerPath: "movieAPI",
    baseQuery,
    tagTypes: ['Movie'],
    endpoints: (build) => ({
        fetchAllTodoList: build.query<IResponseMovie, IGetParams>({
            query: (params) => ({
                url: '/v1.3/movie',
                 params:params
            }),
            providesTags: (result, error, arg) => ['Movie']
        })

    })
})
