import { useState } from "react";
import style from "./App.css"
import Working from "./component/Working";
import Done from "./component/Done";
import Headers from "./component/Header"

function App() {
  const [todo, setTodo] = useState([
    { id: 1, title: '된건가', content: '과제완료하기', isDone: true },
    { id: 2, title: '진짠가', content: '과제완료하기', isDone: true },
    { id: 3, title: '1시간안에 가능?', content: '과제완료하기', isDone: true },
  ])
  


  return (
    <div className="body">
      <Headers  todo={todo} setTodo={setTodo} />
      <Working todo={todo} setTodo={setTodo} />
      <Done todo={todo} setTodo={setTodo} />
    </div>
  );
}

export default App;
