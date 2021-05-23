import './App.css';
import SignUp from './components/signup';
import Login from './components/login';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Notes from './components/notes'


function App() {
  return (
    <div className="App">
      <Container>
        <Row className="align-items-center">
          <Col md={5}><SignUp></SignUp></Col>
          <Col><h4>OR</h4></Col>
          <Col md={5}><Login></Login></Col>
        </Row>
      </Container>
      <Notes/>
    </div>
  );
}

export default App;
