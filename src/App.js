import './App.css';
import MainPageContainer from './components/MainPage/MainPageContainer'
import ProjectContainer from './components/Projects/ProjectContainer'
import ProjectPageContainer from './components/ProjectPage/ProjectPageContainer'
import {BrowserRouter, Route} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from './components/Login/LoginContainer'

const App = (props) => {
  return (
    <BrowserRouter>
        <div>
            <HeaderContainer/>
            <Route exact path="/" render={() => <MainPageContainer/>}/>
            <Route exact path="/projects" render={() => <ProjectContainer/>}/>
            <Route path="/projectPage/:projectId?" render={() => <ProjectPageContainer/>}/>
            <Route path="/login" render={() => <LoginContainer/>}/>
        </div>
    </BrowserRouter>
  );
};

export default App;
