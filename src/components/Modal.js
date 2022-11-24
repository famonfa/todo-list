import { useState } from 'react';
import ReactDOM from 'react-dom';


const Modal = ({  setOpenModal, openModal, addTodo }) => {

    const [newTodoValue, setNewTodoValue] = useState('')

    
  

    const onChange = (event) => {
       setNewTodoValue(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
       addTodo(newTodoValue)
       setOpenModal(!openModal)
    }

    const onClickButton = () => {
        setOpenModal(!openModal)
    }

    return ReactDOM.createPortal(



        <div className='modal-background'>
            <div className='card'>
                <div className='input-modal'>
                    <form onSubmit={onSubmit}>
                        <label>What's next?</label>
                        <textarea
                            value={newTodoValue}
                            onChange={onChange}
                            placeholder='Kill mother' />
                    </form>
                
                <div className='btns'>
                    <button  className='btnn' type='submit' onClick={onSubmit}>Add</button>
                    <button className='btnn' onClick={onClickButton}>Close</button>
                </div>
                </div>
            </div>
        </div>,
        document.getElementById('modal')
    )
}

export default Modal