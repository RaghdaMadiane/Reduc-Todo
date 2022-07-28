import { Container, Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import './login.css'

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from "../../redux/userSlice";
function BasicExample() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const { isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { register, watch, handleSubmit, setError, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    console.log(data);

    dispatch(login(data))
      .unwrap()
      .then(() => {
        // window.location.reload();
      })
      .catch(() => {
        setLoading(false);
      });

  }
  if (isLoggedIn) {
    return navigate('/')
  }
  return (
    <Container className='login_container mt-4 w-50'>
      <div className="card mb-3" >
        <div className="row g-0">
          <div className="left-content col-md-6 d-flex justify-content-center align-items-center flex-column col-5">
            <h4 className='text-center'>
              New user? you can register here
            </h4>
            <Button as={Link} to='/register' variant="primary" type="submit">

              Sign Up
            </Button>
          </div>
          <div className="col-md-6 col-7">
            <div className="card-body">
              <h5 className="card-title">Sign In </h5>

              <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control {...register("email", { required: "This field is required.", pattern: { value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, message: "Invalid email address " } })} placeholder="Enter email" />

                  {errors.email && (<Form.Text className="text-danger">
                    <p>{errors.email.message}</p>
                  </Form.Text>)}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" {...register("password", {
                    required: "You must specify a password", minLength: {
                      value: 4,
                      message: "Password must have at least 4 characters"
                    }, maxLength: {
                      value: 14,
                      message: "Password cannot exceed more than 14 characters"
                    }
                  })} placeholder="Password" />
                  {errors.password && (<Form.Text className="text-danger">
                    <p>{errors.password.message}</p>
                  </Form.Text>)}
                </Form.Group>

                <Form.Text className="text-primary">
                  <Link to="/">
                    <p>Forget Your Password</p>
                  </Link>
                </Form.Text>


                <Button variant="outline-primary" type="submit">
                  {loading && (
                    <span className="spinner-border spinner-border-sm"></span>
                  )}
                  Login
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default BasicExample;