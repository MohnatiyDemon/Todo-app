import React from 'react'
import { Todo } from '../Todo/Todo'

interface ITodos {
  id: string
  task: string
  completed: boolean
  isEditing: boolean
}

interface TodoListProps {
  todos: ITodos[]
  deleteTodo: (id: string) => void
  toggleComplete: (id: string) => void
  editTodo: (id: string) => void
}

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  deleteTodo,
  toggleComplete,
  editTodo,
}) => {
  return (
    <>
      {todos &&
        todos.map((item) => (
          <Todo
            key={item.id}
            id={item.id}
            task={item.task}
            completed={item.completed}
            isEditing={item.isEditing}
            deleteTodo={deleteTodo}
            toggleComplete={toggleComplete}
            editTodo={editTodo}
          />
        ))}
    </>
  )
}
