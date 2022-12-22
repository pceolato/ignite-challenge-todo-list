import { ChangeEvent, FormEvent, useState } from 'react';
import { PlusCircle } from 'phosphor-react';


import styles from './App.module.css'
import './global.css'

import { Header } from './components/Header'
import { ListCard } from './components/ListCard'

export interface Task {
  id: number;
  checked: boolean;
  content: string;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [textTask, setTextTask] = useState('')

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();
    const newTask = {
      id: Math.random(),
      checked: false,
      content: textTask
    }

    setTasks(state => [...state, newTask])
    setTextTask('')
  }

  function handleTextTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('');
    setTextTask(event.target.value)
  }

  const isNewTaskEmpty = textTask.trim().length === 0; 

  return (
    <div>
      <Header />
      <div className={styles.main}>
        <form onSubmit={handleCreateNewTask} className={styles.group}>
          <input
            type="text"
            placeholder="Adicione uma nova tarefa"
            value={textTask}
            required
            onChange={handleTextTaskChange}
          />
          <div className={styles.button}>
            <button 
              type="submit"
              disabled={isNewTaskEmpty}
            >
              Criar
              <PlusCircle size={16} />
            </button>
          </div>
        </form>
        <ListCard tasks={tasks} setTasks={setTasks}/>
      </div>
    </div>
  )
}

export default App
