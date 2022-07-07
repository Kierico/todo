import { Trash } from "phosphor-react";

import styles from "./Tasks.module.css";

interface Tasks {
    text: string;
    isCompleted: boolean;
}

export function Tasks({ text, isCompleted }: Tasks) {
    return (
        <ul>
            <li className={styles.content}>
                <div className={styles.wrapper}>
                    <input type="radio" checked={isCompleted} />
                    <p>
                        {text}
                    </p>
                </div>
                <button
                    className={styles.trashIcon}
                >
                    <Trash size={18} />
                </button>
            </li>
        </ul>
    );
}