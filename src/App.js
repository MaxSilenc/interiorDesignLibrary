import './App.css';
import Header from './components/Header/Header'
import MainPage from './components/MainPage/MainPage'
import ProjectContainer from './components/Projects/ProjectContainer'
import AdminPanelContainer from './components/AdminPanel/AdminPanelContainer'
import ProjectPage from './components/ProjectPage/ProjectPage'
import {BrowserRouter, Route} from "react-router-dom";


const App = (props) => {
  return (
    <BrowserRouter>
        <div>
            <Header />
            <Route exact path="/" render={() => <MainPage/>}/>
            <Route exact path="/projects" render={() => <ProjectContainer/>}/>
            <Route path="/adminPanel" render={() => <AdminPanelContainer/>}/>
            {/*<Route path="/projects/1" render={() => <ProjectPage/>}/>*/}
        </div>
    </BrowserRouter>
  );
};

export default App;
