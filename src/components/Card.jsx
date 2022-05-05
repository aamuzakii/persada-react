import React from 'react'
import { useHistory } from 'react-router'
import '../style.css'
import {
  useLocation
} from "react-router-dom";


function Card({el}) {

  let location = useLocation();


  const [deleteMovieById, { data: deletedMovie }] = useMutation(DELETE_MOVIE)

  let history = useHistory()

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

    deleteMovieById({
      variables : {
        "input": el._id
      },
      refetchQueries : [{
        query: GET_ALL_MOVIES
      }]
    })
  }

  if (location.pathname === "/movies") return (
    <div className="card m-2 clickable-card" style={{width: '18rem'}} >
      {/* <img src="..." className="card-img-top" alt="..." /> */}
      <div className="card-body">
        <h5 className="card-title">{el.title}</h5>
        <p className="card-text">{el.overview}</p>
        <p className="card-text">{el.poster_path}</p>
        <p className="card-text">{el.popularity}</p>
        <button className="btn btn-primary m-1" onClick={ handleEdit }  >Edit</button>
        <button className="btn btn-danger m-1" onClick={ handleDelete } >Delete</button>
      </div>
    </div>
  );

  return (
    <div className="card m-2 clickable-card" style={{width: '18rem'}} >
      {/* <img src="..." className="card-img-top" alt="..." /> */}
      <div className="card-body">
        <h5 className="card-title">{el.title}</h5>
        <p className="card-text">{el.overview}</p>
      </div>
    </div>
  );
}

export default Card