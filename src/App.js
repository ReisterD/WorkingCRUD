import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Students from './Components/Students';
import AddStudent from './Components/AddStudent';
import EditStudent from './Components/EditStudent';
import ViewStudent from './Components/ViewStudent';
import Home from './Components/Home';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends Component {

  render() {
    return (
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/students' element={<Students />}></Route>
          <Route exact path='/add-student' element={<AddStudent />}></Route>
          <Route exact path='/edit-student/:studentId' element={<EditStudent />}></Route>
          <Route exact path='/view-student/:studentId' element={<ViewStudent />}></Route>
        </Routes>
      </Router >
    );
  }
}


export default App;
