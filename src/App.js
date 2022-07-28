import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './component/Home/Home.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './component/Header/Header';
import Todo from './component/Todo/toDo';
import Login from './component/Login/Login'
import Register from './component/Registration/Register'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
     
        <Route path="/" element={<Todo/>}></Route>
       
        <Route path="/Login" element={<Login/>}></Route>
        <Route path="/Register" element={<Register/>}></Route>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
