import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import LayoutPage from "../pages/LayoutPage/LayoutPage";
import SignInPage from "../pages/authorization/SignInPage";
import SignUpPage from "../pages/authorization/SignUpPage";
import NewPostPage from "../pages/createNewPost/NewPostPage";
import EditPostPage from "../pages/editPost/EditPostPage";
import ExplorePostsPage from "../pages/explorePage/ExplorePostsPage";
import FollowingPostPage from "../pages/followingPostPage/FollowingPostPage";
import ProfilePage from "../pages/profilePage/components/Profile";
import SettingsPage from "../pages/settingsPage/SettingsPage";
import EditProfilePage from "../pages/settingsPage/components/EditProfilePage";
import UserProfilePage from "../pages/userProfilePage/UserProfilePage";
import UserSearchPage from "../pages/userSearch/UserSearchPage";
import PostCarousel from "../pages/explorePage/components/PostCarousel";

const router = createBrowserRouter([
    {
        element: <LayoutPage />,
        children: [
            {
                path: "/",
                element: <FollowingPostPage />,
            },
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
                element: <SettingsPage />,
            },
            {
                path: "editPost",
                element: <EditPostPage />,
            },
            {
                path: "editProfile",
                element: <EditProfilePage />,
            },
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