import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IGetParams, IResponseMovie} from "interfaces";
import {baseQuery} from "../config/api";

interface IBQuery {
    baseUrl: string,
    headers: {
        "X-API-KEY": string,
    }
}


export const animeAPI = createApi({
    reducerPath: "animeAPI",
    baseQuery,
    tagTypes: ['animeAPI'],
    endpoints: (build) => ({
        fetchAllTodoList: build.query<IResponseMovie, IGetParams>({
            query: (params) => ({
                url: '/v1.3/movie',
                 params: params
            }),
            providesTags: (result, error, arg) => ['animeAPI']
        })

    })
})
