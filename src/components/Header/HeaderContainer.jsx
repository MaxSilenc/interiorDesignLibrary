import React from 'react'
import Header from  './Header'
import {connect} from 'react-redux'
import {getCurrUserThunk, logoutAC} from './../../state/authReducer'
import {getAuthDude} from "../../selectors/selectors";

class HeaderContainer extends React.Component{
    logout = () =>{
        this.props.logout();
    };

    componentDidMount() {
        this.props.getCurrUser();
    }
    render() {
        return <Header {...this.props}/>
    }
}

let mapStateToProps = (state) => {
    return {
        state: getAuthDude(state)
    }
};

export default connect(mapStateToProps, {
    getCurrUser: getCurrUserThunk,
    logout: logoutAC
})(HeaderContainer);