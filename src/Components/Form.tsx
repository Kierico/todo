import { PlusCircle } from "phosphor-react";

import styles from "./Form.module.css"

export function Form() {
    return (
        <form className={styles.container}>
            <div className={styles.content}>
                <input type="text" placeholder="Adicione uma nova tarefa" />
                <button>
                    <strong>Criar</strong>
                    <PlusCircle size={16} color="var(--gray-100)" />
                </button>
            </div>
        </form>
    );
}