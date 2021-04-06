import {BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import Login from './login/Login';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
          <Route path='/'>
            <Login />
          </Route>
        </Router>
    </div>
  );
}

export default App;
