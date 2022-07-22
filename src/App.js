import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './component/Home/Home.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './component/Header/Header';
import Todo from './component/Todo/toDo';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
       
        <Route path="/" element={<Home/>}></Route>
        <Route path="/toDo" element={<Todo/>}></Route>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
