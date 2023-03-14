import styles from './ContentWrapperText.module.scss';
import { useContext } from 'react';
import { MediaQueryContext } from '../../../contexts/media-query-context';

const ContentWrapperText = (props) => {
    const { isSmallScreen, isMediumScreen } = useContext(MediaQueryContext);

    const classNames = [styles['content-wrapper-text']];

    if (isSmallScreen) {
        classNames.push(styles.small);
    }

    if (isMediumScreen) {
        classNames.push(styles.medium);
    }

    return <div className={classNames.join(' ')}>{props.children}</div>;
};

export default ContentWrapperText;