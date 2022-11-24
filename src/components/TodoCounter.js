import React from 'react'
import ProgressBar from "@ramonak/react-progress-bar";



const TodoCounter = ({total, completed}) => {

    let porcentaje = Math.round((completed * 100) / total)
    if (total === 0) {
    porcentaje = ''
    }
    console.log(completed);
    console.log(total);

    return (
        <div className="prog">
        <ProgressBar className="progged" completed={porcentaje} />
        </div>

    )
} 

export default TodoCounter