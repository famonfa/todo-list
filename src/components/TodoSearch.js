import React from 'react'

const TodoSearch = ({search, setSearch}) => {


  const onSearchValueChange = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  }

  return (
    <div className='input-container'>
      <input className='input'
        placeholder='Search task'
        value={search}
        onChange={onSearchValueChange} />
    </div>

  )
}

export default TodoSearch