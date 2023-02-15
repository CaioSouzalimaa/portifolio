import './App.css';
import {NavBar} from "./components/nav_bar/nav_bar";
import {Banner} from "./components/banner/banner";
import {Skills} from "./components/skills/skills";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Skills/>
    </div>
  );
}

export default App;
