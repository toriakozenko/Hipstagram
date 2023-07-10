import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/homepage/HomePage";
import SignInPage from "../pages/authorization/SignInPage";
import SignUpPage from "../pages/authorization/SignUpPage";
import ProfilePage from "../pages/profilePage/components/Profile";
import NewPost from "../pages/createNewPost/NewPost";
import EditPostPage from "../pages/editPost/EditPostPage";
import UserPostsPage from "../pages/userPosts/UserPostsPage";
import UserSearchPage from "../pages/userSearch/UserSearchPage";



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
    {
        path: "/userSearch",
        element: <UserSearchPage />,
    },


    // {
    //     path: "/newPost",
    //     element: <NewPost />,
    // },
    // {
    //     path: "/editPost/:postId",
    //     element: <EditPostPage />,
    // },
    // {
    //     path: "/userPosts/userId",
    //     element: <UserPostsPage />,
    // },
   
]);

export default router;