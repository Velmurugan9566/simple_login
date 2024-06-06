import React from "react";
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
function Dashboard(){
return(
    <>
    <div className="dash">
        
        <h2>....Welcome Makkale.... &#121280;</h2>
        <Link to='/login' className='btn btn-warning' >Sign Out</Link>
    </div>
    </>
)

}

export default Dashboard;