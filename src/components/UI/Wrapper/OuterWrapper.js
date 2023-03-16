import styles from './OuterWrapper.module.scss'

const OuterWrapper = (props) => {
    return (
        <div className={`${styles['outer-wrapper']} ${styles[props.theme]} ${styles[props.margin]}`}>
            {props.children}
        </div>
    );
}

export default OuterWrapper;