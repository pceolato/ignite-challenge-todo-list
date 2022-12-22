import { Check, Trash } from "phosphor-react";

import styles from './Card.module.css'

interface CardProps {
    id: number;
    content: string;
    checked: boolean;
    handleCheckTask:(id: number) => void;
    deleteTask:(id: number) => void;
}

export function Card({id, content, checked, handleCheckTask, deleteTask}: CardProps) {
    
    function onCheckTask() {
        handleCheckTask(id)
    }

    function onDeleteTask() {
        deleteTask(id)
    }
    
    return (
        <div className={styles.card}>
            <div className={styles.content}>
                <div>
                    <div className={checked ? styles.checked : styles.unchecked} onClick={onCheckTask}>
                        {checked && <Check size={12} weight="bold" color="#F2F2F2"/> }
                    </div>
                    <p className={checked ? styles.taskCompleted : styles.taskIncomplete}>
                        {content}
                    </p>
                </div>
                <div className={styles.button}>
                    <button title="Deletar comentário" onClick={onDeleteTask}>
                        <Trash size={24} />
                    </button>
                </div>
            </div>
        </div>
    )
}