import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';
import Home from './components/Home/Home';
import Work from './components/Work/Work';
import Contact from './components/Contact/Contact';
import { BrowserRouter , Route } from 'react-router-dom';


function App() {
  return ( 
    <BrowserRouter>
    <div className="App">
      < NavBar />
      <Route exact path = "/" component={ Home } />
      <Route exact path = "/about" component={ About } />
      <Route exact path = "/work" component={ Work } />
      <Route exact path = "/contact" component={ Contact } />
     
    </div>
    </BrowserRouter>
  );
}

export default App;
