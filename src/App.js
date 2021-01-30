import react from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './styles/App.css';
import Homepage from './Homepage.js';

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Homepage}></Route>
    </Router>
  );
}

export default App;
