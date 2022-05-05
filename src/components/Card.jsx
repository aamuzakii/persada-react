import React from 'react'
import { useNavigate } from 'react-router'
import {
  useLocation
} from "react-router-dom";


function Card({el}) {

  let location = useLocation();

  let history = useNavigate()

  const handleEdit = (e) => {
    let path = ('/movies/edit/' + el._id)
    history.push({
      pathname: path,
      state: {  // location state
        data: el, 
      },
    }); 
  }

  const handleDelete = (e) => {
    console.log(e)
  }

  return (
    <div className="card m-2 clickable-card" style={{width: '18rem'}} >
      {/* <img src="..." className="card-img-top" alt="..." /> */}
      <div className="card-body">
        <h5 className="card-title">{el.title}</h5>
        <h1>sds</h1>
        <p className="card-text">{el.overview}</p>
      </div>
    </div>
  );
}

export default Card