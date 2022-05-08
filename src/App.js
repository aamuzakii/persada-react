import './App.css';
import { Switch, Route } from 'react-router-dom'
import Home from './views/Home'
import Orders from './views/Orders'

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" >
          <Home></Home>
        </Route>

        <Route exact path="/orders" >
          <Orders></Orders>
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
