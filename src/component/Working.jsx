import React from 'react'
import "./Working.css"

function Working({ todo, setTodo }) {
  const DeleteBtnClick = (itemId) => {
    setTodo(todo.filter(i => i.id !== itemId))
  }
  const DoneBtnClick = (id) => {
    setTodo(todo.map(item=>item.id === id ? {...item, isDone : !item.isDone} : item))
  }

  return (
    <div className='working'>
      <div>
        <h2>Working😤</h2>
      </div>
      <div className='total-box'>
        {
          todo.map(item => 
            item.isDone ? (
              <div className='working-box'>
                <div key={item.id}>
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                  <div>
                    <button className='deleteBtn' onClick={() => DeleteBtnClick(item.id)}>삭제하기</button>
                    <button className='doneBtn' onClick={() => DoneBtnClick(item.id)}>완료</button>
                  </div>
                </div>
              </div>
            ) : null
          )}
      </div>
    </div>
  )
}

export default Working