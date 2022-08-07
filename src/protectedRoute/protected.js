import {useDispatch, useSelector} from'react-redux'

import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoute=()=>{

    const { user: currentUser } = useSelector((state) => state.auth);
    return currentUser ? <Outlet /> : <Navigate to="/login" />;
  
}