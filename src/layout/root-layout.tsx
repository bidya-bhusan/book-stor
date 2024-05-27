import { Outlet } from "react-router-dom";
import { Navbar } from "../components/navbar";

function RootLayout() {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    )
}

export default RootLayout;