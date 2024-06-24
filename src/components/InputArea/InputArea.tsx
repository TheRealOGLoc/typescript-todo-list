import { useState } from "react"

type todoListProps = {
    setTodos: React.Dispatch<React.SetStateAction<string[]>>
}

export default function InputArea({setTodos}: todoListProps) {

    const [todoInput, setTodoInput] = useState<string>("")

    const addToList = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setTodos(prev => [...prev, todoInput])
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTodoInput(event.target.value)
    }

    return (
        <div>
            <form onSubmit={addToList} >
                <input type="text" onChange={handleChange} />
                <input type="submit" value="Add todo" />
            </form>
        </div>
    )
}
