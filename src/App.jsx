import { useState } from "react";
import style from "./App.css"
import Working from "./component/Working";
import Done from "./component/Done";
import Input from "./component/Input";

function App() {
  // const [todo, setTodo] = useState([
  //   { id: 1, title: '된건가', content: '과제완료하기' },
  //   { id: 2, title: '진짠가', content: '과제완료하기' },
  //   { id: 3, title: '1시간안에 가능?', content: '과제완료하기' },
  // ])
  // const [doneTodo, setDoneTodo] = useState([])
  

  

  // const clickBtnAddContent = () => {
  //   const newTodo = {
  //     id: todo[todo.length - 1].id + 1,
  //     title,
  //     content,
  //   }
  //   setTodo([...todo, newTodo])
  //   setTitle('')
  //   setContent('')
  // }


  // const workingDoneBtnClick = (item) => {
  //   setTodo(todo.filter(i => i.id !== item.id))
  //   const newDoneTodo = {
  //     id: item.id,
  //     title: item.title,
  //     content: item.content,
  //   }
  //   setDoneTodo([...doneTodo, newDoneTodo])
  // }

  // const workingDeleteBtnClick = (itemId) => {
  //   setTodo(todo.filter(i => i.id !== itemId))
  // }

  // const doneDeleteBtnClick = (item) => {
  //   setDoneTodo(doneTodo.filter(i => i.id !== item.id))
  // }
  // const fromDoneToWorkingBtn = (item) => {
  //   setDoneTodo(doneTodo.filter(i => i.id !== item.id))
  //   const newTodo = {
  //     id: item.id,
  //     title: item.title,
  //     content: item.content,
  //   }
  //   setTodo([...todo, newTodo])
  // }

  return (
    <div className="body">
      <Input />

      <Working />
      {/* todo={todo} workingDoneBtnClick={workingDoneBtnClick} workingDeleteBtnClick={workingDeleteBtnClick}  */}
      <Done/>
      {/* doneTodo={doneTodo} doneDeleteBtnClick={doneDeleteBtnClick} fromDoneToWorkingBtn={fromDoneToWorkingBtn}  */}
    </div>
  );
}

export default App;
