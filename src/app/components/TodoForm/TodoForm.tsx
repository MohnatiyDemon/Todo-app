'use client'
import React, { ChangeEvent, FormEvent, useState } from 'react'
import styles from './TodoForm.module.scss'

interface ITodoProps {
  addTodo: (todo: string) => void
}

export const TodoForm: React.FC<ITodoProps> = ({ addTodo }) => {
  const [todo, setTodo] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!todo) return
    addTodo(todo)
    setTodo('')
  }

  return (
    <form className={styles.TodoForm} onSubmit={handleSubmit}>
      <input
        className={styles['form-input']}
        type="text"
        value={todo}
        onChange={handleChange}
        placeholder="Enter your task here"
      />
      <button className={styles['form-button']} type="submit">
        Add Task
      </button>
    </form>
  )
}
