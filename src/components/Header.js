import React, {useState} from 'react';
import noteImage from '../assets/notes.png';
import tickImage from '../assets/double-tick.png';
import plusImage from '../assets/plus.png';
import Todo from './Todo';
import { useAddTodoMutation } from '../features/api/apiSlice';

export default function Header() {
    const [ addTodo, {isLoading, isError, isSuccess}] = useAddTodoMutation();

    const [ title, setTitle ] = useState('');
    const [ complete, setComplete ] = useState(false);
    const [ color, setColor ] = useState('green');

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo({
            text: title,
            complete,
            color
        });
        reset();
    }

    const reset = () => {
        setTitle('');
        setComplete('');
        setColor('');
    }


  return (
    <div>
        <form onSubmit={handleSubmit} className="flex items-center bg-gray-100 px-4 py-4 rounded-md">
            <img src={noteImage} className="w-6 h-6" alt="Add todo" />
                <input
                    type="text"
                    placeholder="Type your todo"
                    className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
                    value={title}
                    onChange={(event)=> setTitle(event.target.value)}
                />
            <button
                disabled={isLoading}
                type="submit"
                className={`appearance-none w-8 h-8 bg-[url('${plusImage}')] bg-no-repeat bg-contain`}
            >
            </button>
        </form>

        {
            isSuccess && (
                <div>Todo Added Successfully</div>
            )
        }

        {
            isError && (
                <div>There was an error!</div>
            )
        }

        <ul className="flex justify-between my-4 text-xs text-gray-500">
            <li className="flex space-x-1 cursor-pointer">
                <img className="w-4 h-4" src={tickImage} alt="Complete" />
                <span>Complete All Tasks</span>
            </li>
            <li className="cursor-pointer">
                Clear completed
            </li>
        </ul>

    </div>
  )
}


