import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
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
            <Container className="p-3">
                <Jumbotron>
                    <h3 className="header">Sign-Up</h3>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="SignUpName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" value={this.state.name} name="full_name" onChange={(event) =>this.handleUserInput(event)} placeholder="Enter email" />   
                        </Form.Group>
                        <Form.Group controlId="SignUpEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" value={this.state.name} name="email" onChange={(event) =>this.handleUserInput(event)} placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group controlId="SignUpPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" value={this.state.name} name="password" onChange={(event) =>this.handleUserInput(event)} placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="SignUpConfirmPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" value={this.state.name} name="confirm_password" onChange={(event) =>this.handleUserInput(event)}placeholder="Password" />
                        </Form.Group>
                        <Button disabled={!this.state.full_name || !this.state.email || !this.state.password || !this.state.confirm_password}variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>

                </Jumbotron>
            </Container>
        )
    }
}