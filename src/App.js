import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams
} from "react-router-dom";
import Home from './views/Home'

function App() {
  return (
    <>
      {/* <Navbar/> */}
      {/* <Routes> */}
        {/* <Route exact path="/" children={ <Home/> } /> */}
      {/* </Routes> */}
      <Home></Home>
    </>
  )
}

export default App;
