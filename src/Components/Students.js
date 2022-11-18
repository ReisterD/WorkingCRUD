import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useEffect, useState } from 'react'
import { confirm } from "react-confirm-box"
import { Link, Navigate } from "react-router-dom"
import axios from "axios"
// import { api_host } from "globals.js"

// import EditStudents from './editStudents'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const Students = () => {

    const [studentList, setStudentList] = useState([])
    const api_host = "http://127.0.0.1:8000/api"
    const api_host_delete = "http://127.0.0.1:8000/api/sample_tables/"

    const getApiData = async () => {
        const response_data = await fetch(api_host + "/sample_tables").then((response) => response.json())
        setStudentList(response_data)
    }

    useEffect(() => {
        console.log("call get students...")
        getApiData()
        console.log(studentList)
    }, [])


    const deleteStudent = (id) => {
        axios.delete(api_host_delete + id).then((response) => {
          alert("Student record " + id + " deleted!");
          setStudentList();
          window.location.reload(false);
         
    
        }).catch(error => {
          alert("Error" + error);
        });
      }


    //const confirm  = async () => {
       // const result = await confirm("Are you sure?");
   //if (result) {
    // deleteStudent();
 //  }
   
    //}

    return <div className='container'>
        <table className="table">
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
                {
                    studentList.map(student => {
                        return <tr key={student.id}>
                        <th scope="row">{student.id}</th>
                        <td>{student.name}</td>
                        <td>{student.age}</td>
                        <td>{student.address}</td>
                        <td><button><Link to ={"/view-student/" + student.id } className="nav-link">View</Link></button></td>
                        <td><button><Link to ={"/edit-student/" + student.id } className="nav-link">Edit</Link></button></td>
                        <td><button onClick={() => deleteStudent(student.id)}>Delete</button></td>
                    </tr>
                    })
                }                
            </tbody>
        </table>

    </div>
}
export default Students