import React from 'react'
import { useState } from 'react'

function Header({ todo, setTodo }) {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')


  const clickBtnAddContent = (event) => {
    event.preventDefault()
    const newTodo = {
      id: todo[todo.length - 1].id + 1,
      title,
      content,
      isDone: true
    }
    setTodo([...todo, newTodo])
    setTitle('')
    setContent('')
  }

  return (
    <div>
      <form onSubmit={clickBtnAddContent}>
        <div className="navbar">
          <div className='titlecontent'>
            <div style={{ marginRight: "20px" }}>
              제목 <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} required/>
            </div>
            <div>
              내용 <input type="text" value={content} onChange={(event) => setContent(event.target.value)}required/>
            </div>
          </div>

          <div>
            <button type='submit' className="btn">추가하기</button>
          </div>
        </div>
      </form>

    </div>
  )
}

export default Header