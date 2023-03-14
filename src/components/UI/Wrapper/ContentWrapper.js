import InnerWrapper from "./InnerWrapper";
import OuterWrapper from "./OuterWrapper";

const ContentWrapper = (props) => {
    return (
        <OuterWrapper theme={props.theme}>
            <InnerWrapper flex={props.flex}>
                {props.children}
            </InnerWrapper>
        </OuterWrapper>
    );
}

export default ContentWrapper;