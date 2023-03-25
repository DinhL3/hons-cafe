import ContentWrapper from '../UI/Wrapper/ContentWrapper';
import ContentWrapperText from '../UI/Wrapper/ContentWrapperText';
import ContentWrapperImage from '../UI/Wrapper/ContentWrapperImage';

import about from "../../assets/img/about.jpg";

const AboutUs = () => {

    return (
        <div >
            <ContentWrapper theme='light-pink' flex={'flex-between-center'}>
                <ContentWrapperImage src={about} alt="Latte cup" />
                <ContentWrapperText>
                    <h1>About us</h1>
                    <p>Our coffee shop is a new addition to the vibrant city of Helsinki, Finland, having opened our doors in 2023. As passionate coffee enthusiasts, we were inspired to create a space where people can come together over a delicious cup of coffee and enjoy the warmth and comfort of a welcoming atmosphere. Come and join us for a unique coffee experience that's unlike any other in Helsinki!</p>
                </ContentWrapperText>
            </ContentWrapper >
        </div >
    );
}

export default AboutUs;