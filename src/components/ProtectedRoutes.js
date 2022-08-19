import styles from '../styles/components/ProtectedRoutes.module.css';
import { useAuthenticationStatus} from '@nhost/react';
import Spinner from './Spinner';
import {Navigate, Location} from 'react-router-dom';

const ProtectedRoute = ({children}) => {
    const {isAuthenticated, isLoading} = useAuthenticationStatus();
    // eslint-disable-next-line no-undef
    const location = useLocation();

    if (isLoading) {
        return (
            <div className={styles.container}>
                <Spinner />
            </div>
        )
    }

    if (!isAuthenticated) {
        return <Navigate to={{pathname: '/sign-in', state: {from: location}}} />

}
return children;
}

export default ProtectedRoute;

