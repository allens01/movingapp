import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import BasePage from './BasePage';

function App() {
  return (
    <Router>
      <BasePage />
    </Router>
  );
}

export default App;
