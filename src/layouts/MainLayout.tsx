import { Outlet } from "react-router-dom";
import { HeaderUnauthorized } from "../components/HeaderUnauthorized"

const MainLayout = () => {
    return (
        <div className="">
            <HeaderUnauthorized />
            <Outlet />
        </div>
    )
}

export default MainLayout