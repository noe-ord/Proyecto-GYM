// import logo from './logo.svg';
// import './App.css';
import './styles/style.scss';
import Baner from './baner';
import Footer from './footer';
import Inicio from './inicio';
import Registro from './registro';
import Info from './info';
import Promos from './promos';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App=()=> (
<Router>
    <Baner></Baner>
    <main>
      <Switch>
  <Route path="/" exact component={Promos}></Route>
  <Route path="/inicio" exact component={Inicio}></Route>
  <Route path="/registro" exact component={Registro}></Route>
  <Route path="/info" exact component={Info}></Route>

  <Route component ={() =>(
    <div className="ed-grid">
      <h1>Error 404</h1>
      <span>Web page not found!!</span>
    </div>
  )}>    
  </Route>
  </Switch>
  </main>
    <Footer></Footer>
</Router>
  )


export default App;
