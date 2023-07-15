import Layout from "./components/Layout";
import { Outlet } from "react-router-dom";
import SignInPage from '../authorization/SignInPage';
import { useSelector } from "react-redux";


function LayoutPage() {
  const auth = useSelector((state) => state.auth);
    return ( 
     auth && auth.token 
      ?  <div style={{display:'flex', width: '100%'}}>
          <Layout />
          <Outlet />
        </div> : <SignInPage /> 
  );
}

export default LayoutPage;

