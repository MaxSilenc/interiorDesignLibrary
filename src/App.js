import './App.css';
import React from 'react'
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
import AdminUsersComponent from './components/AdminPanel/AdminUsers/AdminUsersContainer'
import StatisticsContainer from './components/AdminPanel/Statistics/StatisticsContainer'
import {connect} from "react-redux";
import {initialisedThunk} from "./state/appReducer";
import {withRouter} from 'react-router-dom'
import {compose} from "redux";
import Preloader from './components/common/Preloader/Preloader'

class App extends React.Component{

    componentDidMount() {
        this.props.initialise()
    }

    render() {
        if (!this.props.init)
            return <Preloader />;

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
                    <Route path="/singleProjectPage/:id?/:page?" render={() => <SingleProjectManagerComponent/>}/>
                    <Route path="/adminUsersPage" render={() => <AdminUsersComponent/>}/>
                    <Route path="/statisticsAdmin" render={() => <StatisticsContainer/>}/>

                </div>
            </BrowserRouter>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        init: state.appInit.initialised
    }
};

export default compose(
    connect(mapStateToProps,{
        initialise: initialisedThunk,
    }),
    withRouter
)(App);

