import ContentWrapper from "../Wrapper/ContentWrapper";
import { ClipLoader } from 'react-spinners';

import styles from './Spinner.module.scss';

const Spinner = (props) => {
    return (
        <div className={styles.wrapper}>
            <ClipLoader
                color="#FF4D6D"
                loading={props.loading}
                size={50}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    );
}

export default Spinner;