import './App.css';
import { Switch, Route } from 'react-router-dom'
import Home from './views/Home'

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/asas" >
          <Home></Home>
        </Route>

        <Route exact path="/recommendation" >
        </Route>

        <Route exact path="/favourite" >
        </Route>

        <Route exact path="/companies/:id" >
        </Route>
      </Switch>
    </>
  )
}

export default App;
