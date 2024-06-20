import React, { useState, useEffect } from 'react';
import styles from './Notification.module.css';

export default function Notification({ message, duration }) {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
        }, duration);

        return () => clearTimeout(timer); 
    }, [duration]);

    if (!visible) return null;

    return (
        <div className={styles.notification}>
            {message}
        </div>
    );
}
