import './App.css';
import Header from './components/Header/Header'
import SliderSection from './components/SliderSection/SliderSection'
import Projects from './components/Projects/Projects'
import AdminPanel from './components/AdminPanel/AdminPanel'
import {BrowserRouter, Route} from "react-router-dom";


const App = (props) => {
  return (
    <BrowserRouter>
        <div>
            <Header />
            <Route exact path="/" render={() => <SliderSection state = {props.state.sliderSectionPage}/>}/>
            <Route path="/projects" render={() => <Projects state = {props.state.projectsPage}/>}/>
            <Route path="/adminPanel" render={() => <AdminPanel dispatch={props.dispatch}
                                                                state={props.state.projectsPage.NewProjectInput}/>}/>
        </div>
    </BrowserRouter>
  );
};

export default App;
