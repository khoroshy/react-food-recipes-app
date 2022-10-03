import {Pages} from './pages';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
       <Pages />
      </Router>
      <div className="mobile">
        <h1 className="mobile__heading">We're terribly sorry!</h1>
        <p className="mobile__text">Unfortunatelly, Just Recipes website is currently available only for desktop devices at the moment :(</p>
        <p className="mobile__text">We promise to fix this in the upcoming updates. Stay tuned!</p>
      </div>
    </div>
  );
}

export default App;
