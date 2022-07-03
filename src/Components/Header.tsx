import { Rocket } from "phosphor-react";

import styles from "./Header.module.css";

export function Header() {
    return (
        <header className={styles.header}>
            <Rocket size={36} color="var(--blue)" />
            <h1 className={styles.title}>to</h1>
        </header>
    );
}