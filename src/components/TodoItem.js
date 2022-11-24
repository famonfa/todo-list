import React from 'react'
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';



const TodoItem = (props) => {


  return (
    <li>
        <CheckBoxOutlinedIcon onClick={props.onComplete} className={`checked checked-check ${props.completed && 'checked-check--active'}`}/>
        <div className='todo-container'>
        <p className={`todo ${props.completed && 'todo--active'}`}>{props.text}</p>
        <RemoveCircleOutlineOutlinedIcon onClick={props.onDelete} className='erase'/>
        </div>
    </li>
  )
}

export default TodoItem