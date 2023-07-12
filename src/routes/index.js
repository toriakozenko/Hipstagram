import { createBrowserRouter } from "react-router-dom";
import SignInPage from "../pages/authorization/SignInPage";
import SignUpPage from "../pages/authorization/SignUpPage";
import ProfilePage from "../pages/profilePage/components/Profile";
import UserSearchPage from "../pages/userSearch/UserSearchPage";
import LayoutPage from "../pages/LayoutPage/LayoutPage";
import ExplorePostsPage from "../pages/explorePage/ExplorePostsPage";
import UserPostsPage from "../pages/userPosts/UserPostsPage";



const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutPage />,
        children: [
            {
                path: "users/:userId",
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
                path: "posts/:userLogin",
                element: <UserPostsPage />,
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
    


    // {
    //     path: "/newPost",
    //     element: <NewPost />,
    // },
    // {
    //     path: "/editPost/:postId",
    //     element: <EditPostPage />,
    // },
   
]);

export default router;