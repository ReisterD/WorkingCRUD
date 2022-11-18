import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, {  useState } from "react";

const AddStudents = () => {
    const api_host = "http://localhost:8000/api/sample_tables"
    const navigate = useNavigate()
    const [enteredName, setName] = useState('')
    const [enteredAge, setAge] = useState('')
    const [enteredAddress, setAddress] = useState('')

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
            .post(api_host, {
                name: enteredName,
                age: enteredAge,
                address: enteredAddress
            })
            .then((response) => {
                alert("Employee " + enteredName + " added!");
                navigate("/read");
            }).catch(error => {
                alert("error===" + error);
            });

    };

    return <div className='container'>
        <form onSubmit={submitActionHandler}>
            <label for="exampleInputEmail1">Student Name</label>
            <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Name" value={enteredName} onChange={nameChangeHandler} required />
            <label for="exampleInputPassword1">Age</label>
            <input type="number" className="form-control" id="exampleInputPassword1" placeholder="Age" value={enteredAge} onChange={ageChangeHandler} required/>
            <label for="exampleInputPassword1">Address</label>
            <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Address" value={enteredAddress} onChange={addressChangeHandler} required /><br></br>
            <button type="submit" className="btn btn-outline-success my-2 my-sm-0">Add Student</button>
        </form>
    </div>
}
export default AddStudents;