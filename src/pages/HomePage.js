import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionRootCategories } from '../api/index.js';
import { Link } from "react-router-dom";




function HomePage() {
  
   const dispatch = useDispatch();
    const rootCategories = useSelector(state => state.promise.RootCategories);
    const { status, payload } = rootCategories || {};
    
    // console.log(rootCategories);

    useEffect(()=>{
      dispatch(actionRootCategories())
    }, [dispatch]);

    // console.log(payload);

  return (
    status === "PENDING" || !status ?
    <div>lala</div> :
    <div className="aside">{
        payload.map(item => <Link key={item._id} to={`/category/${item._id}`} >{item.name}</Link>)
    }
    </div>
  )
}

export default HomePage;