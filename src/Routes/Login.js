import React from "react";
import "../assets/Register.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';
import Axios from "axios";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const Login = () => {

    const MySwal = withReactContent(Swal)
    
    const navigate = useNavigate()

   
   
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        Axios.post("http://143.198.205.127:4000/login",{
            email:email,
            password:password,
        },{withCredentials : true}).then(res=> {
           if(res.data.data==="logedIn"){
            MySwal.fire({
              title: <strong>Log in successfully!</strong>,
              html: <i>Congratualation</i>,
              icon: 'success'
            }); 
            setTimeout(() => {
              navigate('/')
             }, 1000);
           }else{
            MySwal.fire({
              title: <strong>Log in fail</strong>,
              html: <i>try again</i>,
              
            }); 
           }    
           setTimeout(() => {
            navigate('/')
           }, 1000);
           
              
        }).catch(err =>console.log(err));  
       
    };

    return (
        <>
    <div>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <Card className="px-4">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-center text-uppercase ">
                    Log In
                  </h2>
                  <div className="mb-3">
                    <Form onSubmit={handleSubmit}>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Email address
                        </Form.Label>
                        <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" required/>
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label className="text-center">
                            Password
                        </Form.Label>
                        <Form.Control onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" required/>
                      </Form.Group>
                    
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      ></Form.Group>
                      <div className="d-grid">
                        <Button variant="primary" type="submit">
                          Login
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        Don't have an account??{' '}
                        <a href='/Register' className="text-primary fw-bold">
                          Sign Up
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
        </>
    );
};

export default Login;