import ContentWrapper from "../Wrapper/ContentWrapper";
import { ClipLoader } from 'react-spinners';

const Spinner = (props) => {
    return (
        <ContentWrapper padding='p-top-bottom-2' flex="flex-center">
            <ClipLoader
                color="#FF4D6D"
                loading={props.loading}
                size={50}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </ContentWrapper>
    );
}

export default Spinner;