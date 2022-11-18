import React from "react"
// importing Link from react-router-dom to navigate to 
// different end points.
import { Link } from "react-router-dom"
import Students from "./Students"

const Home = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Student CRUD</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="form-inline my-2 my-lg-0">
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit"><Link to="add-student" className="nav-link">Add Student</Link></button>
          </form>
        </div>
      </nav>
      <Students />
      {/* <table className="table">
        <thead>
          <tr>
            <th scope="col">ID #</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Address</th>
            <th scope="col" colSpan="3">Options</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td><button><Link to="view-student" className="nav-link">View</Link></button></td>
            <td><button><Link to="edit-student" className="nav-link">Edit</Link></button></td>
            <td><button>Delete</button></td>
          </tr>
        </tbody>
      </table> */}

    </div>
  )
}

export default Home