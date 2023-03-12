import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Backdrop.module.scss';

const Backdrop = ({ onClose }) => {
    const handleBackdropClick = () => {
        onClose();
    };

    return ReactDOM.createPortal(
        <div className={styles.backdrop} onClick={handleBackdropClick}></div>,
        document.getElementById('backdrop-root')
    );
};

export default Backdrop;