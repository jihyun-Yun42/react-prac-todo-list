import React from 'react'
import "./Working.css"

function Working({ todo, workingDoneBtnClick,workingDeleteBtnClick }) {



  return (
    <div className='working'>
      {/* <div>
        <h2>Working😤</h2>
      </div>
      <div className='total-box'>
        {
          todo.map(item => {
            return (
              <div className='working-box'>
                <div key={item.id}>
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                  <div>
                    <button className='deleteBtn' onClick={()=>workingDeleteBtnClick(item.id)}>삭제하기</button>
                    <button className='doneBtn' onClick={()=>workingDoneBtnClick(item)}>완료</button>
                  </div>
                </div>
              </div>
            )
          })}
      </div> */}
    </div>
  )
}

export default Working