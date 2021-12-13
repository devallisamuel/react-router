import { Routes, Route} from "react-router-dom";
import Home from "./components/Home"; 
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>

        <Route path = '/' element = {<Home name = 'string'/>}></Route>
        <Route path = '/about' element = {<About/>}></Route>
        <Route path = '/contact' element = {<Contact/>}></Route>
        <Route  path = '*' element = {<Error/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
