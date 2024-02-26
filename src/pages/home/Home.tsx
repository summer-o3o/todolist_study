import React, { Fragment, useState } from 'react';
import TodoList from '../../components/TodoList';

const Home = () => {
  const [value, setValue] = useState("");
  const [todoList, setTodoList] = useState([{
    id: 0,
    text: ""
  }]);

  const handleText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    // // e.preventDefault();
    // setValue("")
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setTodoList((prev) => ([...prev, { id: prev[prev.length - 1].id + 1, text: value }]))

    setValue("");
  }

  console.log("todoList", todoList)

  return (
    <>
      <form action="#none" method="post" onSubmit={(e) => handleSubmit(e)}>
        <input type="text" value={value} onChange={(e) => handleText(e)} /><button type="submit" onClick={(e) => handleClick(e)}>전송</button>
      </form>
      <ul>
        {todoList.map(({ id = 0, text = "" }) => (
          <TodoList key={id} id={id} text={text} />
        ))}
      </ul>
    </>
  );
};

export default Home;