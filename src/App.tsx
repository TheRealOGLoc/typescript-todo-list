import { useState } from "react"
import InputArea from "./components/InputArea/InputArea";
import TodoList from "./components/TodoList/TodoList";

function App() {

  const [todos, setTodos] = useState<string[]>([]);

  const deleteTodo = (index: number) => {
    setTodos(prev => prev.filter((_, pos: number) => pos !== index))
  }

  return (
    <>
      <InputArea setTodos={setTodos} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </>
  )
}

export default App
