import React from 'react'
import { useSelector } from 'react-redux'
import Todoitem from './Todoitem';


export default function Todolist() {

    const taskObj = useSelector(store => store);


    const taskItems = taskObj.taskItems.map((task, id) => {
        id++

        return (
            <Todoitem task={task} key={id} />
        )
    })

    return (
        <div>
            {taskItems}
        </div>
    )
}
