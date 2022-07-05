import { Trash } from "phosphor-react";

import styles from "./Tasks.module.css";

export function Tasks() {
    return (
        <ul>
            <li className={styles.content}>
                <div className={styles.wrapper}>
                    <input type="radio" id="completed" />
                    <p>
                        Estudar mais ReactJS. Só vou ficar gigante no React se eu estudar muito!
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