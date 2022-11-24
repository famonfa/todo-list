import React from 'react'

const CreateTodoButton = ({setOpenModal, openModal}) => {

  const onClickButton = () => {
    setOpenModal(!openModal)
  }

  return (
    <div className='btn-container'>
    <button 
    onClick={onClickButton}
    className='btn'>+</button>
    </div>
    )
}

export default CreateTodoButton 