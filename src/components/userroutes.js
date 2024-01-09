import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';


const UserRoute = ({ children }) => {
    let location = useLocation();
    return <Navigate to="/" state={{ from: location }} />;

};

export default UserRoute;