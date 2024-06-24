import { useState } from "react"
import InputArea from "./components/InputArea/InputArea";

function App() {

  const [todos, setTodos] = useState<string[]>([]);

  return (
    <>
      <InputArea setTodos={setTodos} />
    </>
  )
}

export default App
