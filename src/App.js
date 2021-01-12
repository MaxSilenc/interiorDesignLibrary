import './App.css';
import Header from './components/Header/Header'
import SliderSection from './components/SliderSection/SliderSection'
import Projects from './components/Projects/Projects'
import {BrowserRouter, Route} from "react-router-dom";


const App = (props) => {
  return (
    <BrowserRouter>
        <div>
            <Header />
            <Route exact path="/" render={() => <SliderSection slideArr = {props.slideArr}/>}/>
            <Route path="/projects" render={() => <Projects NavLinksArr={props.NavLinksArr} ProjectsArr={props.ProjectsArr}/>}/>
        </div>
    </BrowserRouter>
  );
}

export default App;
