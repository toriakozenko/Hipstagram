import Layout from "./components/Layout";
import { Outlet } from "react-router-dom";


function LayoutPage() {
    return ( 
    <div style={{display:'flex', width: '100%'}}>
      <Layout />
      <Outlet />
    </div>
  );
}

export default LayoutPage;