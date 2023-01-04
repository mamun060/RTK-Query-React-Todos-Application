import React, { useState } from 'react';
import cancelImage from '../assets/cancel.png'
import { useDeleteTodoMutation, useEditTodoMutation, useUpdateCompleteMutation } from '../features/api/apiSlice';

export default function Todo({todo}) {
    const {id, text, complete = false, color } = todo;

    const [deleteTodo, {isLoading, isError, isSuccess}] = useDeleteTodoMutation();
    const [editTodo] = useEditTodoMutation();

    const handleStatusChange = () => {
        if(!complete){
            editTodo({id, data: {complete: true} })
        } else {
            editTodo({id, data: {complete: false} })
        }
    }

    const handleColorChange = (color) => {
        editTodo({ id, data: {color} })
    }

    const handleDelete = () => {
        if(id){
            deleteTodo(id)
        }
    };

  return (
    <div
        className="flex justify-start items-center p-2 hover:bg-gray-100 hover:transition-all space-x-4 border-b border-gray-400/20 last:border-0"
    >
        <div
            className={`rounded-full bg-white border-2 border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 
             ${ complete && 'border-green-500 focus-within:border-green-500' }`}
        >
            <input
                checked={complete}
                onChange={ handleStatusChange }
                type="checkbox"
                className="opacity-0 absolute rounded-full"
            />
           {
                complete && (
                <svg
                    className="fill-current w-3 h-3 text-green-500 pointer-events-none"
                    viewBox="0 0 20 20"
                >
                    <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                </svg>
                )
           }
        </div>

        <div className={`select-none flex-1 ${complete && 'line-through'}`}>
            {text}
        </div>

        <div
            onClick={()=> handleColorChange('green') }
            className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-green-500 hover:bg-green-500
             ${ color=== 'green' && 'bg-green-500'  } `}
        ></div>

        <div
            onClick={()=> handleColorChange('yellow') }
            className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-yellow-500 hover:bg-yellow-500 ${
                color === 'yellow' && 'bg-yellow-500'
            } `}
        ></div>

        <div
            onClick={()=> handleColorChange('red') }
            className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-red-500 hover:bg-red-500 
            ${color === 'red' &&' bg-red-500'}` }
        ></div>

        <img
            onClick={handleDelete}
            src={cancelImage}
            className="flex-shrink-0 w-4 h-4 ml-2 cursor-pointer"
            alt="Cancel"
        />
    </div>
  )
}
