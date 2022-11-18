import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Students from './Components/Students';
import AddStudents from './Components/addStudents';
import EditStudents from './Components/editStudents';
import ViewStudents from './Components/addStudents';
import Home from './Components/Home';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends Component {

  render() {
    return (
      <Router>
        <Routes>
         <Route  exact path='/' element={<Home />}></Route>
          <Route  path='/students' element={<Students />}></Route>
          <Route  path='/add-student' element={<AddStudents />}></Route>
          <Route  path='/edit-student' element={<EditStudents />}></Route>
          <Route  path='/view-student' element={<ViewStudents />}></Route>
        </Routes>
      </Router >
    );
  }
}


export default App;
