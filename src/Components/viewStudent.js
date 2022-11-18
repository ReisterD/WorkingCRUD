import React, { useEffect, useState } from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

function ViewStudent() {
    const api_host = "http://127.0.0.1:8000/api/sample_tables/";
    const params = useParams();
    const [studId, setStudentId] = useState('');
    const [studName, setName] = useState('');
    const [studAge, setAge] = useState('');
    const [studAddress, setAddress] = useState('');
    
    useEffect(() => {

        axios.get(api_host+params.studentId).then((response) => {
          const studData = response.data;
          setStudentId(studData.id);
          setName(studData.name);
          setAge(studData.age);
          setAddress(studData.address);
      
        }).catch(error => {
          alert("Error Ocurred getting student detail:"+ error);
        });
      }, []);



    return <div className='container'>
        <form id="data">
            <label for="studentID">Student ID No.</label>
            <input type="number" className="form-control" id="studentID" value={studId} readOnly='readonly' />
            <label for="studentName">Student Name</label>
            <input type="text" value={studName}  className="form-control" id="studentName" placeholder="Name"  readOnly='readonly'/>
            <label for="studentAge">Age</label>
            <input type="text" value={studAge} className="form-control" id="studentAge" placeholder="Age" readOnly='readonly' />
            <label for="studentAddress">Address</label>
            <input type="text" value={studAddress} className="form-control" id="studentAddress" placeholder="Address" readOnly='readonly'/><br></br>
        </form>
    </div>
}
export default ViewStudent;