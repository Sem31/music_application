import {BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import Login from './login/Login';
import Signup from './login/Signup';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/signup'>
            <Signup />
          </Route>
        </Router>
    </div>
  );
}

export default App;
