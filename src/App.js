import './App.css';
import React, { Suspense, lazy } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Shop from './component/Shop/shop'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './component/Header/Header';
import Todo from './component/Todo/toDo';
import Login from './component/Login/Login'
import Register from './component/Registration/Register'
import { ProtectedRoute } from './protectedRoute/protected'
const Shop = lazy(() => import('./component/Shop/shop'));
function App() {
  return (
    <div className="App">

      <BrowserRouter>

        <Header />
       
        <Routes>

          <Route exact path='/' element={<ProtectedRoute />}>
            <Route path="/" element={<Todo />}></Route>
          </Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Register" element={<Register />}></Route>
          <Route
            path="/shop"
            element={<React.Suspense fallback={<div>Loading...</div>}>
                <Shop />
              </React.Suspense>
            }
          />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
