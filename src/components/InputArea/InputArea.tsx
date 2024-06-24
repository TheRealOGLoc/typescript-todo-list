import { useState } from "react"

type todoListProps = {
    setTodos: React.Dispatch<React.SetStateAction<string[]>>
}

export default function InputArea({setTodos}: todoListProps) {

    const [todoInput, setTodoInput] = useState<string>("")

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (todoInput !== "") {
            setTodos(prev => [...prev, todoInput])
        }
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTodoInput(event.target.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit} >
                <input type="text" onChange={handleChange} />
                <input type="submit" value="Add todo" />
            </form>
        </div>
    )
}
