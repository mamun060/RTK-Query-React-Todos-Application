import React from 'react'
import { useGetTodosQuery } from '../features/api/apiSlice'
import Todo from './Todo'

export default function TodoList() {

  const {data: todos, isLoading, isError} = useGetTodosQuery();

  let content = null;

  if(isLoading) {
    content = <div className=' text-center text-black text-bold '>Loading....</div>
  }

  if(!isLoading && isError){
    content = <div> There was an error </div>
  }

  if(!isLoading && !isError && todos?.length === 0){
    content = <div>Sorry NOT Found Todos!</div>
  }

  if(!isLoading && !isError && todos?.length  > 0){
    content = todos.map((todo)=> <Todo key={todo.id} todo={todo} />)
  }

  return (
    <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
      {content}
    </div>
  )
}
