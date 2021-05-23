import React, { Component } from 'react';
import { Form, Button, Col } from 'react-bootstrap';
export default class SignUp extends Component{
    constructor() {
        super();
        this.state = {
        full_name: null,
        email: null,
        password: null,
        confirm_password:null,
        formSuccess: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUserInput(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value });
    }
    
    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state)
    }
    render() {
        return(
            <div>
                <section className="colorlib-about">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                                <span className="heading-meta">Sign-Up</span>
                            </div>
                        </div>
                        <div className="row row-pt-md">
                            <div className="animate-box">
                                <Form>
                                    <Form.Group controlId="formBasicName">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" value={this.state.name} name="full_name" onChange={(event) =>this.handleUserInput(event)} placeholder="Enter email" />   
                                    </Form.Group>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" value={this.state.name} name="email" onChange={(event) =>this.handleUserInput(event)} placeholder="Enter email" />
                                        <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                        </Form.Text>
                                    </Form.Group>

                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" value={this.state.name} name="password" onChange={(event) =>this.handleUserInput(event)} placeholder="Password" />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicConfirmPassword">
                                        <Form.Label>Confirm Password</Form.Label>
                                        <Form.Control type="password" value={this.state.name} name="confirm_password" onChange={(event) =>this.handleUserInput(event)}placeholder="Password" />
                                    </Form.Group>
                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                                </Form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}