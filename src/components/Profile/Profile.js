import React, { useContext } from 'react';
import { Link, Navigate } from "react-router-dom";
import { UserContext } from '../../contexts/user-context';
import Button from "../UI/Button/Button";
import LogoutIcon from '@mui/icons-material/Logout';
import ContentWrapper from '../UI/Wrapper/ContentWrapper';


const Profile = () => {
    const { logoutUser, user } = useContext(UserContext);


    return (
        <React.Fragment>
            {!user && (
                <Navigate to="/login" replace={true} />
            )}
            <ContentWrapper flex={'flex-between'} padding="p-1">
                <h1>Your orders</h1>
                <Button type="button" className="light text-and-icon" onClick={logoutUser}>
                    <LogoutIcon />Log out
                </Button>
            </ContentWrapper>

        </React.Fragment>
    );
}

export default Profile;