import TodoListItem from "../TodoListItem/TodoListItem.tsx"

type todosProps = {
    todos: string[],
    deleteTodo: (index: number) => void
}

export default function TodoList({todos, deleteTodo}: todosProps) {
  return (
    <div>
      {
        todos.map((todo: string, index: number) => <TodoListItem deleteTodo={deleteTodo} todo={todo} index={index} key={index} /> )
      }
    </div>
  )
}
