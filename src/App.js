import './App.css';
import MainPageContainer from './components/MainPage/MainPageContainer'
import ProjectContainer from './components/Projects/ProjectContainer'
import ProjectPageContainer from './components/ProjectPage/ProjectPageContainer'
import {BrowserRouter, Route} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from './components/Login/LoginContainer'
import RegistrationContainer from './components/Registration/RegistrationContainer'
import PersonalAreaContainer from  './components/PersonalArea/PersonalAreaContainer'
import AdminMainContainer from './components/AdminPanel/AdminMain/AdminMainContainer'
import AdminProjectsContainer from './components/AdminPanel/AdminProjects/AdminProjectsContainer'
import SingleProjectManagerComponent from './components/AdminPanel/AdminProjects/SingleProjectManager/SingleProjectManagerContainer'

const App = (props) => {
  return (
    <BrowserRouter>
        <div>
            <HeaderContainer/>
            <Route exact path="/" render={() => <MainPageContainer/>}/>
            <Route exact path="/projects/:theme?/:type?/:page?" render={() => <ProjectContainer/>}/>
            <Route path="/projectPage/:projectId?" render={() => <ProjectPageContainer/>}/>
            <Route path="/login" render={() => <LoginContainer/>}/>
            <Route path="/registration" render={() => <RegistrationContainer/>}/>
            <Route path="/personalArea" render={() => <PersonalAreaContainer/>}/>
            <Route path="/admin/:username?/:id?" render={() => <AdminMainContainer/>}/>
            <Route path="/projectsManager/:page?" render={() => <AdminProjectsContainer/>}/>
            <Route path="/singleProjectPage/:id?" render={() => <SingleProjectManagerComponent/>}/>

        </div>
    </BrowserRouter>
  );
};

export default App;
