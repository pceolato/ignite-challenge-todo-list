import styles from './ListCard.module.css';

import clipboard from '../assets/Clipboard.svg';

export function ListCard() {
    return (
        <div className={styles.listCard}>
            <header>
                <div className={styles.createdTask}>
                    <strong>Tarefas criadas</strong>
                    <div>0</div>
                </div>
                <div className={styles.concludedTask}>
                    <strong>Concluídas</strong>
                    <div>0</div>
                </div>
            </header>
            <div className={styles.cards}>
                <div>
                    <img src={clipboard} alt="Imagem de prancheta" />
                    <strong>Você ainda não tem tarefas cadastradas</strong>
                    <p>Crie tarefas e organize seus itens a fazer</p>
                </div>
            </div>
        </div>
    )
}