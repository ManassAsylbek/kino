import {createApi} from "@reduxjs/toolkit/query/react";
import {IGetParams, IResponseMovie} from "interfaces";
import {baseQuery} from "../config/api";





export const animatedSeriesAPI = createApi({
    reducerPath: "animatedSeriesAPI",
    baseQuery,
    tagTypes: ['animatedSeriesAPI'],
    endpoints: (build) => ({
        fetchAllTodoList: build.query<IResponseMovie, IGetParams>({
            query: (params) => ({
                url: '/v1.3/movie',
                params:params
            }),
            providesTags: (result, error, arg) => ['animatedSeriesAPI']
        })

    })
})
