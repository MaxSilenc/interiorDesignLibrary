import React from 'react';
import Login from "./Login";
import {connect} from 'react-redux'
import {loginThunk} from "../../state/authReducer";
import Redirect from 'react-router-dom/es/Redirect'

class LoginComponent extends React.Component{
    onSubmit = (data) =>{
        this.props.login(data)
    };


    render() {
        if (this.props.state.isAuth) return <Redirect to={'/'}/>;

        return (
            <>
                <Login {...this.props} onSubmit={this.onSubmit}/>
            </>
        )
    }
}


let mapStateToProps = (state) => {
    return {
        state: state.auth
    }
};



export default connect(mapStateToProps,{
    login: loginThunk
})(LoginComponent);
