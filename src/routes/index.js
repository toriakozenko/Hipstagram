import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/homepage/HomePage";
import SignInPage from "../pages/authorization/SignInPage";
import SignUpPage from "../pages/authorization/SignUpPage";
import ProfilePage from "../pages/profilePage/components/Profile";


const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/signin",
        element: <SignInPage />,
    },
    {
        path: "/signup",
        element: <SignUpPage />,
    },
    {
        path: "/users/:userId",
        element: <ProfilePage />,
    },
   
]);

export default router;