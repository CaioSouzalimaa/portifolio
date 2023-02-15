import './App.css';
import {NavBar} from "./components/nav_bar/nav_bar";
import {Banner} from "./components/banner/banner";
import {Skills} from "./components/skills/skills";
import {Project} from "./components/project/project";
import {Contact} from "./components/contact/contact";
import {Footer} from "./components/footer/footer";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Skills/>
      <Project/>
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;
