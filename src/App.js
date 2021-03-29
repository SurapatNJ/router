import './App.css'
import Nav from './pages/Nav.js'
import About from './pages/About.js'
import Shop from './pages/Shop.js'
import ItemDetail from './pages/ItemDetails.js'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

const App = () => {
  return(
    <Router>
        <div className="App">
        <Nav/>
        <Switch>
          <Route path="/" exact />
          <Route path="/about"exact component={About}/>
          <Route path="/shop"exact component={Shop}/>  
          <Route path="/shop/:id"exact component={ItemDetail}/>  
        </Switch>
        </div>
    </Router>
  )
}

export default App