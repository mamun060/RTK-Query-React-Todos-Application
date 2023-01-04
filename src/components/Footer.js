import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useGetTodosQuery } from '../features/api/apiSlice'
import { colorChange, statusChange } from '../features/filter/filterSlice'

export default function Footer() {
    const { status, colors } = useSelector((state)=> state.filter )
    const {data: todos, isSuccess } = useGetTodosQuery({status, colors})
    const dispatch = useDispatch();

    const handleStatusChange = (status) => {
        dispatch(statusChange(status))
    }

    const handleColorChange = (color) => {
        dispatch(colorChange(color))
    }

  return (
        <div className="mt-4 flex justify-between text-xs text-gray-500">
            <p> 5 tasks left</p>
            <ul className="flex space-x-1 items-center text-xs">
                <li 
                    className={`cursor-pointer ${ status === 'All' && 'font-bold'} `}
                    onClick={ ()=> handleStatusChange('All') }
                >
                    All
                </li>
                <li>|</li>
                <li 
                    className={`cursor-pointer ${ status === 'Incomplete' && 'font-bold'} `} 
                    onClick={ ()=> handleStatusChange('Incomplete') }
                >
                    Incomplete
                </li>
                <li>|</li>
                <li 
                    className={`cursor-pointer ${ status === 'Complete' && 'font-bold'} `}
                    onClick={ ()=> handleStatusChange('Complete') }
                >
                    Complete
                </li>
                <li></li>
                <li></li>
                <li
                    className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${
                    colors.includes('green') && 'bg-green-500'
                }`}
                onClick={() => handleColorChange('green')} >

            </li>
            <li
              className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${
                colors.includes('red') && 'bg-red-500'
              }`}
              onClick={() => handleColorChange('red')}
            ></li>
            <li
              className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${
                colors.includes('yellow') && 'bg-yellow-500'
              }`}
              onClick={() => handleColorChange('yellow')}
            ></li>
            </ul>
        </div>
  )
}
