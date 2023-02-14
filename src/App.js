import './App.css';
import {NavBar} from "./components/nav_bar/nav_bar";
import {Banner} from "./components/banner/banner";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
    </div>
  );
}

export default App;
