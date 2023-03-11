import styles from './Button.module.scss';

const Button = (props) => {
  const classNames = props.className ? props.className.split(' ') : [];

  return (
    <button
      type={props.type || 'button'}
      className={`${styles.button} ${classNames.map((name) => styles[name]).join(' ')
        }`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
