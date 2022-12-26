import styles from './ListCard.module.css';

import clipboard from '../assets/Clipboard.svg';
import { Card } from './Card';
import { useState } from 'react';
import { Task } from '../App';

interface listCardProps {
    tasks: Task[];
    setTasks: (task: Task[]) => void;
}

export function ListCard({tasks, setTasks}: listCardProps) {
    const [tasksCompleted, setTasksCompleted] = useState(0)

    function handleCheckTask(id: number) {
        const taskMarkCheck = tasks.map(task => task.id === id ? {
            ...task,
            checked: !task.checked
        }: task);

        setTasks(taskMarkCheck)
    }

    function deleteTask(id: number) {
        const taskWithoutId = tasks.filter(task => task.id !== id)
        setTasks(taskWithoutId)
    }

    const scoreTasks = tasks.filter(task => task.checked === true).length

    return (
        <div className={styles.listCard}>
            <header>
                <div className={styles.createdTask}>
                    <strong>Tarefas criadas</strong>
                    <div>{tasks.length}</div>
                </div>
                <div className={styles.concludedTask}>
                    <strong>Concluídas</strong>
                    <div>
                        {scoreTasks}
                        {' de '}
                        {tasks.length}
                    </div>
                </div>
            </header>
            {
                tasks.length ? (
                    <div className={styles.cards}>
                        {
                            tasks.map(task => (
                                <Card 
                                    key={task.id}
                                    id={task.id}
                                    content={task.content}
                                    checked={task.checked}
                                    handleCheckTask={handleCheckTask}
                                    deleteTask={deleteTask}
                                />
                            ))
                        }
                    </div>
                ) : (
                    <div className={styles.notCards}>
                        <div>
                            <img src={clipboard} alt="Imagem de prancheta" />
                            <strong>Você ainda não tem tarefas cadastradas</strong>
                            <p>Crie tarefas e organize seus itens a fazer</p>
                        </div>
                    </div>
                )
            }
        </div>
    )
}