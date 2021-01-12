import './App.css';
import Header from './components/Header/Header'
import SliderSection from './components/SliderSection/SliderSection'
import Projects from './components/Projects/Projects'
import {BrowserRouter, Route} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
        <div>
            <Header />
            <Route path="/home" component={SliderSection}/>
            <Route path="/projects" component={Projects}/>
        </div>
    </BrowserRouter>
  );
}

export default App;
