import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


// API Slice login creation
export const apiSlice = createApi({
    reducerPath: "todosApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:9000"
    }),
    endpoints: (builder)=> ({
        getTodos: builder.query({
            query: ()=> '/todos',
            keepUnusedDataFor: 120
        }),

    })
})


export const {useGetTodosQuery} = apiSlice;