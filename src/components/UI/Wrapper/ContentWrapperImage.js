import styles from './ContentWrapperImage.module.scss';

import { useContext } from 'react';
import { MediaQueryContext } from '../../../contexts/media-query-context';

const ContentWrapperImage = (props) => {
    const { isSmallScreen, isMediumScreen } = useContext(MediaQueryContext);

    const classNames = [styles['content-wrapper-image']];

    if (isSmallScreen) {
        classNames.push(styles.small);
    }

    if (isMediumScreen) {
        classNames.push(styles.medium);
    }

    return (
        <div className={classNames.join(' ')}>
            <img src={props.src} alt={props.alt} />
            {isSmallScreen && <div className={styles.overlay}></div>}
        </div>
    );
}

export default ContentWrapperImage;