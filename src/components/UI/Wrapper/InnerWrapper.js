import styles from './InnerWrapper.module.scss'

const InnerWrapper = (props) => {
    return (
        <div className={`${styles['inner-wrapper']} ${styles[props.flex]}`}>
            {props.children}
        </div>
    );
}

export default InnerWrapper;