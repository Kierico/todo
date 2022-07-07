import { Notepad } from "phosphor-react";
import styles from "./Main.module.css";
import { Tasks } from "./Tasks";

import { v4 as uuidV4 } from "uuid";

const tasks = [
    {
        id: uuidV4(),
        text: "Estudar mais ReactJS. Só vou ficar gigante no React se eu estudar muito!",
        isCompleted: true
    },
    {
        id: uuidV4(),
        text: "Kiérico Souza",
        isCompleted: false
    },
    {
        id: uuidV4(),
        text: "Só vou ficar gigante no React se eu estudar muito!",
        isCompleted: false
    }
]

export function Main() {
    return (
        <main>
            <div className={styles.header}>
                <div className={styles.tasks}>
                    <strong>Tarefas criadas</strong>
                    <span>{tasks.length}</span>
                </div>
                <div className={styles.completed}>
                    <strong>Concluídas</strong>
                    <span>{`${tasks.filter(task => task.isCompleted).length} de ${tasks.length}`}</span>
                </div>
            </div>
            <article className={styles.content}>
                {tasks.length === 0 ?
                    <div className={styles.wrapper}>
                        <Notepad size={56} color="var(--gray-400)" />
                        <div className={styles.text}>
                            <strong>Você ainda não tem tarefas cadastradas</strong>
                            <p>Crie tarefas e organize seus itens a fazer</p>
                        </div>
                    </div>
                    :
                    tasks.map(task => {
                        return (
                            <Tasks key={task.id} text={task.text} isCompleted={task.isCompleted} />
                        )
                    })
                }
            </article>
        </main>
    );
}