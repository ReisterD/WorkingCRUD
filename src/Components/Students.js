import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useEffect, useState } from 'react'
import { confirm } from "react-confirm-box"
import { Link } from "react-router-dom"
// import { api_host } from "globals.js"

// import EditStudents from './editStudents'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const Students = () => {

    const [studentList, setStudentList] = useState([])
    const api_host = "http://127.0.0.1:8000/api"

    const getApiData = async () => {
        const response_data = await fetch(api_host + "/sample_tables").then((response) => response.json())
        setStudentList(response_data)
    }

    useEffect(() => {
        console.log("call get students...")
        getApiData()
        console.log(studentList)
    }, [])

    const deleteStudent = () => {
        confirm('Are you sure you want to delete this Student?')
    }

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
                        <td><button>View</button></td>
                        <td><button><Link to="Edit-student" className="nav-link">Edit</Link></button></td>
                        <td><button onClick={deleteStudent}>Delete</button></td>
                    </tr>
                    })
                }                
            </tbody>
        </table>

    </div>
}
export default Students