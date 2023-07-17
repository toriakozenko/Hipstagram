import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import LayoutPage from "../pages/LayoutPage/LayoutPage";
import SignInPage from "../pages/authorization/SignInPage";
import SignUpPage from "../pages/authorization/SignUpPage";
import NewPostPage from "../pages/createNewPost/NewPostPage";
import ExplorePostsPage from "../pages/explorePage/ExplorePostsPage";
import PostCarousel from "../pages/explorePage/components/PostCarousel";
import ProfilePage from "../pages/profilePage/components/Profile";
import UserProfilePage from "../pages/userProfilePage/UserProfilePage";
import UserSearchPage from "../pages/userSearch/UserSearchPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutPage />,
        children: [
            {
                path: "users/:userId",
                element: <UserProfilePage />,
            },
            {
                path: "profile/:userId",
                element: <ProfilePage />,
            },
            {
                path: "search",
                element: <UserSearchPage />,
            },
            {
                path: "explore",
                element: <ExplorePostsPage />,
            },
            {
                path: "newPost",
                element: <NewPostPage />,
            },
            {
                path: "settings",
                element: <PostCarousel />,
            },
            // {
            //     path: "editPost",
            //     element: <EditPostPage />,
            // },
            {
                path: "*",
                element: <ErrorPage />,
            },
        ]
    },
    {
        path: "/signin",
        element: <SignInPage />,
    },
    {
        path: "/signup",
        element: <SignUpPage />,
    },
]);

export default router;