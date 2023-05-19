import {createApi} from "@reduxjs/toolkit/query/react";
import {IGetParams, IResponseMovie} from "interfaces";
import {baseQuery} from "../config/api";



export const tvShowAPI = createApi({
    reducerPath: "tvShowAPI",
    baseQuery,
    tagTypes: ['tvShowAPI'],
    endpoints: (build) => ({
        fetchAllTodoList: build.query<IResponseMovie[], IGetParams>({
            query: (params) => ({
                url: '/v1.3/movie',
                 params: {
                    ...params,
                     type: ['movie']
                 }
            }),
            providesTags: (result, error, arg) => ['tvShowAPI']
        })

    })
})
