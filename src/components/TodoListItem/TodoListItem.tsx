type todoPorps = {
    todo: string,
    index: number,
    deleteTodo: (index: number) => void
}

export default function TodoListItem({todo, index, deleteTodo}: todoPorps) {

    const deleteTodoWithIndex = (index: number) => {
        deleteTodo(index)
    }

  return (
    <div>
      {todo}
      <button onClick={() => deleteTodoWithIndex(index)} >X</button>
    </div>
  )
}
