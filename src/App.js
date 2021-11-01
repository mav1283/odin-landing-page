
import { Switch, Route } from 'react-router';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './components/subpages/About';
import Contact from './components/subpages/Contact';
import './stylesheets/index.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Switch>
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
