import React from 'react'
import "./Working.css"

function Done({todo, setTodo}) {
  const deleteBtn = (itemId)=> {
    setTodo(todo.filter(i => i.id !== itemId))
  }
  const cancelBtn = (id) => {

    setTodo(todo.map(item=>item.id === id ? {...item, isDone : !item.isDone} : item))
  }
  return (
    <div className='working'>
      <div>
        <h2>Done👍</h2>
      </div>
      <div className='total-box'>
        {
          todo.map(item=>
            item.isDone === false ? 
            <div className='working-box'>
              <div key={item.id}>
                <h3>{item.title}</h3>
                <p>{item.content}</p>
                <div>
                  <button className='deleteBtn' onClick={()=>deleteBtn(item.id)}>삭제하기</button>
                  <button className='doneBtn' onClick={()=>cancelBtn(item.id)}>취소</button>
                </div>
              </div>
            </div>
             : null )
        }
      </div>
    </div>
  )
}

export default Done