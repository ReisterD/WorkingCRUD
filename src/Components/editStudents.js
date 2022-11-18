import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function EditStudents() {
    return <div className='container'>
        <form>
            <label for="exampleInputEmail1">Student Name</label>
            <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Name" />
            <label for="exampleInputPassword1">Age</label>
            <input type="number" className="form-control" id="exampleInputPassword1" placeholder="Age" />
            <label for="exampleInputPassword1">Address</label>
            <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Address" /><br></br>
            <button type="submit" className="btn btn-outline-success my-2 my-sm-0">Save</button>
            <button type="submit" className="btn btn-outline-success my-2 my-sm-0">Cancel</button>
        </form>
    </div>
}
export default EditStudents;