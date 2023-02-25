import React from 'react'
import "./Working.css"

function Done({doneTodo, doneDeleteBtnClick,fromDoneToWorkingBtn}) {
  
  return (
    <div className='working'>
      <div>
        <h2>Done👍</h2>
      </div>
      <div className='total-box'>
        {
          doneTodo.map(item=>{
            return (
            <div className='working-box'>
              <div key={item.id}>
                <h3>{item.title}</h3>
                <p>{item.content}</p>
                <div>
                  <button className='deleteBtn' onClick={()=>doneDeleteBtnClick(item)}>삭제하기</button>
                  <button className='doneBtn' onClick={()=>fromDoneToWorkingBtn(item)}>취소</button>
                </div>
              </div>
            </div>

          )})
        }
      </div>
    </div>
  )
}

export default Done