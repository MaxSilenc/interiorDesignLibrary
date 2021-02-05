import React from 'react'
import Header from  './Header'
import {connect} from 'react-redux'
import {getCurrUserThunk, logoutAC} from './../../state/authReducer'

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
        state: state.auth
    }
};

export default connect(mapStateToProps, {
    getCurrUser: getCurrUserThunk,
    logout: logoutAC
})(HeaderContainer);