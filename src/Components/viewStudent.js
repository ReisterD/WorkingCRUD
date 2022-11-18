import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ViewStudents() {
    return <div className='container'>
        <form>
        <fieldset disabled="disabled">
            <label for="exampleInputEmail1">Student Name</label>
            <input type="text" className="form-control" id="exampleInputEmail1" value="Mark" />
            <label for="exampleInputPassword1">Age</label>
            <input type="number" className="form-control" id="exampleInputPassword1" value="33" />
            <label for="exampleInputPassword1">Address</label>
            <input type="text" className="form-control" id="exampleInputPassword1" value="San Antonio" /><br></br>
            </fieldset>
        </form>
    </div>
}
export default ViewStudents;