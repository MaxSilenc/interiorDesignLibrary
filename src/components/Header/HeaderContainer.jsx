import React from 'react'
import Header from  './Header'
import {connect} from 'react-redux'
import {getCurrUserThunk, logoutAC} from './../../state/authReducer'
import {getAuthDude} from "../../selectors/selectors";
import {getProjectsThunk} from "../../state/projectsPageReducer"

class HeaderContainer extends React.Component{
    logout = () =>{
        this.props.logout();
    };

    getProjectsOnClick = () =>{
        this.props.getProjects(1, "all", "all")
    };

    componentDidMount() {
        this.props.getCurrUser();
    }
    render() {
        return <Header {...this.props} getProjectsOnClick={this.getProjectsOnClick}/>
    }
}

let mapStateToProps = (state) => {
    return {
        state: getAuthDude(state),
    }
};

export default connect(mapStateToProps, {
    getCurrUser: getCurrUserThunk,
    logout: logoutAC,
    getProjects: getProjectsThunk
})(HeaderContainer);