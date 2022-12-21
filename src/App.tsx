import { Header } from './components/Header'

import styles from './App.module.css'

import './global.css'
import { CreateTask } from './components/CreateTask'
import { ListCard } from './components/ListCard'

function App() {
  return (
    <div>
      <Header />

      <div className={styles.main}>
        <CreateTask />
        <ListCard />
      </div>
    </div>
  )
}

export default App
