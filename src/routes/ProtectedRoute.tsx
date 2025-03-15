import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"
import { RootState } from "../redux"

export const ProtectedRoute: React.FC = () => {
    const currentUserId = useSelector((state: RootState) => state.selected.currentUserId);
    if (!currentUserId)
        return <Navigate to="/login" />
    return <Outlet/>
}