import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


// API Slice login creation
export const apiSlice = createApi({
    reducerPath: "todosApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:9000"
    }),
    tagTypes: ["Todo"],
    endpoints: (builder)=> ({
        getTodos: builder.query({
            query: ()=> '/todos',
            keepUnusedDataFor: 10,
            providesTags: ["Todo"]
        }),
        addTodo: builder.mutation({
            query: (data) => ({
                url: "/todos",
                method: "POST",
                body:  data
            }),
            invalidatesTags: ["Todo"]
        }),
        deleteTodo: builder.mutation({
            query: (id)=> ({
                url: `/todos/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["Todo"]
        })
        
    })
})


export const { useGetTodosQuery ,  useAddTodoMutation, useDeleteTodoMutation } = apiSlice;