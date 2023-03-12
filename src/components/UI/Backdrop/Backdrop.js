import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import styles from './Backdrop.module.scss';

const Backdrop = ({ onClose }) => {
    useEffect(() => {
        // Add the 'overflow: hidden' style to the body element when the component mounts
        document.body.style.overflow = 'hidden';

        // Remove the 'overflow: hidden' style from the body element when the component unmounts
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    const handleBackdropClick = () => {
        onClose();
    };

    return ReactDOM.createPortal(
        <div className={styles.backdrop} onClick={handleBackdropClick}></div>,
        document.getElementById('backdrop-root')
    );
};

export default Backdrop;