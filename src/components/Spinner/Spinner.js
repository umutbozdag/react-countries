import React from 'react'
import styles from './spinner.module.css';

export default function Spinner() {
    return (
        <div className={styles.Spinner}>
            <i className={`fas fa-spinner fa-spin fa-3x ${styles.spinnerIcon}`} />
        </div>
    )
}
