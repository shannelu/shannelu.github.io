import { NavBar } from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Banner } from './components/Banner';
import { Footer } from './components/Footer';
import { Projects } from './components/Projects';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
