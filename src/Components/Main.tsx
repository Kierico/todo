import { Notepad } from "phosphor-react";
import styles from "./Main.module.css";
import { Tasks } from "./Tasks";

export function Main() {
    return (
        <main>
            <div className={styles.header}>
                <div className={styles.tasks}>
                    <strong>Tarefas criadas</strong>
                    <span>0</span>
                </div>
                <div className={styles.completed}>
                    <strong>Concluídas</strong>
                    <span>0</span>
                </div>
            </div>
            <article className={styles.content}>
                {/* <Notepad size={56} color="var(--gray-400)" />
                <div className={styles.text}>
                    <strong>Você ainda não tem tarefas cadastradas</strong>
                    <p>Crie tarefas e organize seus itens a fazer</p>
                </div> */}
                <Tasks />
            </article>
        </main>
    );
}