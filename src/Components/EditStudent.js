import React, { useEffect, useState } from 'react';
import {useParams, useNavigate} from "react-router-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

function EditStudent() {
    const api_host = "http://127.0.0.1:8000/api/sample_tables/";
    const navigate = useNavigate();
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

      const nameChangeHandler = (event) => {
        setName(event.target.value);
      };
    
      const ageChangeHandler = (event) => {
        setAge(event.target.value);
      };

      const addressChangeHandler = (event) => {
        setAddress(event.target.value);
      };


      const submitActionHandler = (event) => {
        event.preventDefault();
        axios
          .put(api_host+params.studentId, {
            id: studId,
            name: studName,
            age: studAge,
            address : studAddress
          })
          .then((response) => {
            alert("Student "+ studId +" updated!");
            navigate('/Home')
    
          }).catch(error => {
            alert("Error Ocurred updating student:"+ error);
          });

        }

    return <div className='container'>
        <form onSubmit={submitActionHandler} id="data">
            <label for="studentID">Student ID No.</label>
            <input type="number" className="form-control" id="studentID" value={studId} readOnly='readonly' />
            <label for="studentName">Student Name</label>
            <input type="text" value={studName} onChange={nameChangeHandler} className="form-control" id="studentName" placeholder="Name" />
            <label for="studentAge">Age</label>
            <input type="text" value={studAge} onChange={ageChangeHandler} className="form-control" id="studentAge" placeholder="Age" />
            <label for="studentAddress">Address</label>
            <input type="text" value={studAddress} onChange={addressChangeHandler} className="form-control" id="studentAddress" placeholder="Address" /><br></br>
            <button type="submit" className="btn btn-outline-success my-2 my-sm-0">Save</button>
            <button type="submit" className="btn btn-outline-success my-2 my-sm-0">Cancel</button>
        </form>
    </div>
}
export default EditStudent;