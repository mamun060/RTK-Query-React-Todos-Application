import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


// API Slice login creation
export const apiSlice = createApi({
    reducerPath: "todosApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:9000"
    }),
    tagTypes: ["Todos"],
    endpoints: (builder)=> ({
        getTodos: builder.query({
            query: ({ status, colors })=> {
                let queryString = '';
                if( status === 'Incomplete'){
                    queryString += `&complete=false`;
                }
                if ( status === 'Complete'){
                    queryString += `&complete=true`
                }
                if( colors.length > 0 ){
                    colors.forEach((color)=>{
                        queryString += `&color=${color}`
                    })
                }

                return `/todos?_sort=id&_order=desc${queryString}`
            },
            keepUnusedDataFor: 600,
            providesTags: ["Todos"]
        }),
        addTodo: builder.mutation({
            query: (data) => ({
                url: "/todos",
                method: "POST",
                body:  data
            }),
            invalidatesTags: ["Todos"]
        }),
        editTodo: builder.mutation({
            query: ({ id, data }) => ({
              url: `/todos/${id}`,
              method: 'PATCH',
              body: data,
            }),
            invalidatesTags: ['Todos'],
        }),
        deleteTodo: builder.mutation({
            query: (id)=> ({
                url: `/todos/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["Todos"]
        }),

        
    })
})


export const { 
    useGetTodosQuery ,  
    useAddTodoMutation, 
    useDeleteTodoMutation,
    useEditTodoMutation } = apiSlice;