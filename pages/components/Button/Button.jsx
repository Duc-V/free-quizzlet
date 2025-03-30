import React from 'react';
import styles from "./button.module.css";
const Button = ({ text, onClick, className = "" }) => {
    return (
        <div>
            <button className={styles.customButton} onClick={onClick}>
                +
            </button>
        </div>
    );
};

export default Button;
