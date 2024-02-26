import React from 'react';

type Props = {
  id: number;
  text: string;
};

const TodoList = ({ id, text }: Props) => {
  return (
    <li>{text}</li>
  );
};

export default TodoList;