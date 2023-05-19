import {createApi} from "@reduxjs/toolkit/query/react";
import {IGetParams, IResponseMovie} from "interfaces";
import {baseQuery} from "../config/api";

interface IBQuery {
    baseUrl: string,
    headers: {
        "X-API-KEY": string,
    }
}


export const cartoonAPI = createApi({
    reducerPath: "cartoonAPI",
    baseQuery,
    tagTypes: ['cartoonAPI'],
    endpoints: (build) => ({
        fetchAllTodoList: build.query<IResponseMovie[], IGetParams>({
            query: (params) => ({  //некоторая фун. которая возвр. обьект сама функция будет принимать аргументы необхю
                // для запроса: это может быть тело запросо,какие-то параметры,url           //
                url: '/v1.3/movie',           //query  нужен для того чтобы получать get
                //  mutation нужен для того чтобы изменять сервер post | put
                 params: params
            }),
            providesTags: (result, error, arg) => ['cartoonAPI']
        })

    })
})
