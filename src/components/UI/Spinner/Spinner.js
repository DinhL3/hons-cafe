import ContentWrapper from "../Wrapper/ContentWrapper";
import { BeatLoader } from 'react-spinners';

const Spinner = (props) => {
    return (
        <ContentWrapper padding='p-top-bottom-2' flex="flex-center">
            <BeatLoader
                color="#FF758F"
                loading={props.loading}
                size={15}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </ContentWrapper>
    );
}

export default Spinner;