import './App.css';
import SignUp from './components/signup';
import Login from './components/login';
function App() {
  return (
    <div className="App">
      <SignUp></SignUp>
      <h2>OR</h2>
      <Login></Login>
    </div>
  );
}

export default App;
