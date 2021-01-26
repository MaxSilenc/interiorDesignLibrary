import React from 'react'
import Header from  './Header'
import * as axios from "axios";
import {connect} from 'react-redux'
import {setUserActionCreator} from './../../state/authReducer'

class HeaderContainer extends React.Component{

    componentDidMount() {
        axios.get("http://127.0.0.1:8000/curr", {
            withCredentials: true
        }).then(respons => {
            this.props.setUser(respons.data.id, respons.data.email, respons.data.login)
        });
    }
    render() {
        debugger
        return <Header {...this.props}/>
    }
}

let mapStateToProps = (state) => {
    debugger
    return {
        state: state.auth
    }
};

export default connect(mapStateToProps, {
    setUser: setUserActionCreator,
})(HeaderContainer);