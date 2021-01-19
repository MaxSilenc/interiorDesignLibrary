import './App.css';
import Header from './components/Header/Header'
import MainPage from './components/MainPage/MainPage'
import ProjectContainer from './components/Projects/ProjectContainer'
import AdminPanelContainer from './components/AdminPanel/AdminPanelContainer'
import ProjectPageContainer from './components/ProjectPage/ProjectPageContainer'
import {BrowserRouter, Route} from "react-router-dom";


const App = (props) => {
  return (
    <BrowserRouter>
        <div>
            <Header />
            <Route exact path="/" render={() => <MainPage/>}/>
            <Route exact path="/projects" render={() => <ProjectContainer/>}/>
            <Route path="/adminPanel" render={() => <AdminPanelContainer/>}/>
            <Route path="/projects/1" render={() => <ProjectPageContainer/>}/>
        </div>
    </BrowserRouter>
  );
};

export default App;
