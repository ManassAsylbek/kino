import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IColumn} from "interfaces";



export const todosAPI = createApi({
    reducerPath: "todosAPI",
    baseQuery: fetchBaseQuery({baseUrl: '  http://localhost:10000'}),
    tagTypes:['Todos'],
    endpoints: (build) => ({
        fetchAllTodoList: build.query<IColumn[], void>({
            query: () => ({  //некоторая фун. которая возвр. обьект сама функция будет принимать аргументы необхю
                // для запроса: это может быть тело запросо,какие-то параметры,url           //
                url: '/todos',           //query  нужен для того чтобы получать get
                //  mutation нужен для того чтобы изменять сервер post | put
               /* params: {
                    _limit: limit
                }*/
            }),
            providesTags:(result,error,arg) =>['Todos']
        }),
        createTodoList: build.mutation<IColumn, IColumn>({
            query: (todoList: IColumn) => ({
                url: '/todos',
                method:"POST",
                body: todoList
            }),
            invalidatesTags:['Todos']
        }),
        updateTodoList: build.mutation<IColumn, IColumn>({
            query: (todoList: IColumn) => ({
                url: `/todos/${todoList.id}`,
                method:"PUT",
                body: todoList
            }),
            invalidatesTags:['Todos']
        }),
        deleteTodoList: build.mutation<IColumn, IColumn>({
            query: (todoList: IColumn) => ({
                url: `/todos/${todoList.id}`,
                method:"DELETE",
                body: todoList
            }),
            invalidatesTags:['Todos']
        })

    })
})
