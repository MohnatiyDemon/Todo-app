import React from 'react'
import { RiDeleteBin2Line } from 'react-icons/ri'
import { FaRegEdit } from 'react-icons/fa'
import styles from './Todo.module.scss'
import { TodoEditForm } from '../TodoEditForm/TodoEditForm'

interface ITodos {
  id: string
  task: string
  completed: boolean
  isEditing: boolean
  deleteTodo: (id: string) => void
  toggleComplete: (id: string) => void
  editTodo: (id: string, updatedTask?: string) => void
}

export const Todo: React.FC<ITodos> = ({
  id,
  task,
  completed,
  isEditing,
  deleteTodo,
  toggleComplete,
  editTodo,
}) => {
  return (
    <>
      {isEditing ? (
        <TodoEditForm
          editTodo={(updatedTask) => {
            editTodo(id, updatedTask)
          }}
          currentTask={task}
        />
      ) : (
        <div
          className={
            completed
              ? `${styles.Todo} ${styles['Todo--completed']}`
              : styles.Todo
          }
        >
          <span
            onClick={() => toggleComplete(id)}
            className={styles['todo-text']}
          >
            {task}
          </span>
          <div className={styles['todo-icons']}>
            <FaRegEdit
              onClick={() => editTodo(id)}
              className={styles['todo-icon']}
            />
            <RiDeleteBin2Line
              className={styles['todo-icon']}
              onClick={() => deleteTodo(id)}
            />
          </div>
        </div>
      )}
    </>
  )
}
