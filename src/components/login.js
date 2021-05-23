import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
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
            <Container className="p-3">
                <Jumbotron>
                    <h3 className="header">Login</h3>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="LoginEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" value={this.state.name} name="email" onChange={(event) =>this.handleUserInput(event)} placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group controlId="LoginPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" value={this.state.name} name="password" onChange={(event) =>this.handleUserInput(event)} placeholder="Password" />
                        </Form.Group>
                        <Button disabled={!this.state.email || !this.state.password} variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Jumbotron>
                                
            </Container>
        )
    }
}