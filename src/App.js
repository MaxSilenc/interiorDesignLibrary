import './App.css';
import MainPage from './components/MainPage/MainPage'
import ProjectContainer from './components/Projects/ProjectContainer'
import AdminPanelContainer from './components/AdminPanel/AdminPanelContainer'
import ProjectPageContainer from './components/ProjectPage/ProjectPageContainer'
import {BrowserRouter, Route} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";


const App = (props) => {
  return (
    <BrowserRouter>
        <div>
            <HeaderContainer/>
            <Route exact path="/" render={() => <MainPage/>}/>
            <Route exact path="/projects" render={() => <ProjectContainer/>}/>
            <Route path="/adminPanel" render={() => <AdminPanelContainer/>}/>
            <Route path="/projectPage/:projectId?" render={() => <ProjectPageContainer/>}/>
        </div>
    </BrowserRouter>
  );
};

export default App;
