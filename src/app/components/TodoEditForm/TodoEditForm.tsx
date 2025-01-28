'use client'
import React, {
  ChangeEvent,
  FormEvent,
  useEffect,
  useRef,
  useState,
} from 'react'
import styles from './TodoEditForm.module.scss'

interface ITodoProps {
  currentTask: string
  editTodo: (updatedTask: string) => void
}

export const TodoEditForm: React.FC<ITodoProps> = ({
  editTodo,
  currentTask,
}) => {
  const [todo, setTodo] = useState(currentTask)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus()
  }, [currentTask])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!todo.trim()) return
    editTodo(todo)
  }

  return (
    <form className={styles.TodoEditForm} onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        className={styles['form-input']}
        type="text"
        value={todo}
        onChange={handleChange}
        placeholder="Edit todo"
      />
      <button className={styles['form-button']} type="submit">
        Update
      </button>
    </form>
  )
}
