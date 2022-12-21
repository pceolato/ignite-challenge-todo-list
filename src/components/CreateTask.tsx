import styles from './CreateTask.module.css';

import { PlusCircle } from 'phosphor-react';

export function CreateTask() {
    return (
        <div className={styles.group}>
            <input
                type="text"
                placeholder="Adiciona uma nova tarefa"
            />
            <div className={styles.button}>
                <button>
                    Criar 
                    <PlusCircle size={16}/>
                </button>
            </div>
        </div>
    )
} 