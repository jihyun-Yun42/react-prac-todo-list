import React from 'react'
import Working from './Working'
import { useState } from 'react'

function Input() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const todoTitle = (event) => {
    setTitle(event.target.value)
  }

  const todoContent = (event) => {
    setContent(event.target.value)
  }

  return (
    <div>
      <form action="submit">
        <div className="navbar">
        <div>
          제목 <input type="text" value={title} onChange={todoTitle} required />
        </div>
        <div>
          내용 <input type="text" value={content} onChange={todoContent}required/>
        </div>
        <div className="btn">
          <button>추가하기</button>
          <Working title={title} content={content}>추가하기</Working>
        </div>
      </div>
      </form>
      
    </div>
  )
}

export default Input