import Home from './component/Home'
import { Route, Switch } from 'react-router-dom';
import About from './component/About';
import Blog from './component/Blog';
import Contact from './component/Contact';
import Single from './component/Singlepost'
 
function App() {
  return (
    <div className="App">

        <Switch>
            <Route exact path='/' component={Home} />
            <Route path="/about" component={About} />
            <Route path="/blog" component={Blog} />
            <Route path="/blog" component={Blog} />
            <Route path="/contact" component={Contact} />
            <Route path='/single' component={Single} />
        </Switch>

    </div>

     

  );
}

export default App;
