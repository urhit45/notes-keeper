import React, { Component } from 'react';
import { Form, Button, Col } from 'react-bootstrap';
export default class Login extends Component{
    constructor() {
        super();
        this.state = {
        email: null,
        password: null,
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
                                <span className="heading-meta">Login</span>
                            </div>
                        </div>
                        <div className="row row-pt-md">
                            <div className="animate-box">
                                <Form>
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