import { Container, Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useNavigate, } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { registeration } from "../../redux/userSlice";
import { useState } from 'react';
import './register.css'
function BasicExample() {
  const [loading, setLoading] = useState(false);
  const [successful, setSuccessful] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, watch, handleSubmit, setError, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    dispatch(registeration(data))
      .unwrap()
      .then(() => {
        // props.history.push("/profile");
        setSuccessful(true);
        navigate('/Login')
        alert("done")
      })
      .catch(() => {
        alert("error")
        setSuccessful(false);
      });
  }
  return (
    <Container className='register_container mt-4 w-50'>
      <div className="card mb-3" >
        <div className="row g-0">
          {/* <div className="col-md-6">
            <img src="..." className="img-fluid rounded-start" alt="..." />
          </div> */}
          <div className="col-md-12">
            <div className="card-body">
              <h5 className="card-title">Sign Up </h5>

              <Form onSubmit={handleSubmit(onSubmit)}>
                <div className="row g-3 col-md-12">
                  <Form.Group className="mb-3   col-md-6" controlId="FirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control {...register("username", { required: "this field is required", maxLength: 80 })} />

                    {errors.username && (<Form.Text className="text-danger">
                      <p>{errors.username.message}</p>
                    </Form.Text>)}
                  </Form.Group>
                  <Form.Group className="mb-3 col-md-6" controlId="LastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control {...register("lastname", {
                      required: "this field is required", minLength: {
                        value: 2,
                        message: 'Min length is 2',
                      }
                    })} />

                    {errors.lastname && (<Form.Text className="text-danger">
                      <p>{errors.lastname.message}</p>
                    </Form.Text>)}
                  </Form.Group>
                </div>
                <div className="row g-3 col-md-12">
                  <Form.Group className="mb-3 col-md-6" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control {...register("email", { required: "This field is required.", pattern: { value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/s, message: "Invalid email address" } })} />

                    {errors.email && (<Form.Text className="text-danger">
                      <p>{errors.email.message}</p>
                    </Form.Text>)}
                  </Form.Group>
                  <Form.Group className="mb-3 col-md-6" controlId="mobileNumber">
                    <Form.Label>Mobile number</Form.Label>
                    <Form.Control  {...register("Mobile", { required: "This field is required.", pattern: { value: /^\d+/g, message: "enter a correct phone number" }, minLength: { value: 6, message: "phone number must have at least 6 characters" }, maxLength: { value: 12, message: "phone number cannot exceed more than 12 characters" } })} type="tel" />

                    {errors.Mobile && (<Form.Text className="text-danger">
                      <p>{errors.Mobile.message}</p>
                    </Form.Text>)}
                  </Form.Group>
                </div>
                <div className="row g-3 col-md-12">
                <Form.Group className="mb-3 col-md-6" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control  {...register("password", {
                    required: "You must specify a password", minLength: {
                      value: 8,
                      message: "Password must have at least 8 characters"
                    }, maxLength: {
                      value: 14,
                      message: "Password cannot exceed more than 14 characters"
                    }
                  })} type="password" />
                  {errors.password && (<Form.Text className="text-danger">
                    <p>{errors.password.message}</p>
                  </Form.Text>)}
                </Form.Group>
                <Form.Group className="mb-3 col-md-6" controlId="type">
                  <Form.Label>Type</Form.Label>
                  <Form.Select {...register("Type", { required: "This field is required." })} >

                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                  </Form.Select>

                </Form.Group>


                </div>

                <div className="d-flex justify-content-center">
                <Button variant="outline-success" type="submit">

                 Sign Up
                </Button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </Container>

  );
}

export default BasicExample;