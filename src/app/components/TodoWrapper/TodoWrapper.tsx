'use client'
import React, { useState } from 'react'
import { TodoForm } from '../TodoForm/TodoForm'
import { TodoList } from '../TodoList/TodoList'
import { v4 as uuidv4 } from 'uuid'
import styles from './TodoWrapper.module.scss'

interface ITodos {
  id: string
  task: string
  completed: boolean
  isEditing: boolean
}

export const TodoWrapper = () => {
  const [todos, setTodos] = useState<ITodos[]>([])

  const addTodo = (todo: string) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ])
  }

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo
      )
    )
  }

  const editTodo = (id: string, updatedTask?: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              task: updatedTask || todo.task,
              isEditing: updatedTask ? false : !todo.isEditing,
            }
          : todo
      )
    )
  }

  return (
    <main className={styles.TodoWrapper}>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
      />
    </main>
  )
}
