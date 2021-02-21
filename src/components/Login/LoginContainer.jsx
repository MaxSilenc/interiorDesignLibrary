import React from 'react';
import Login from "./Login";
import {connect} from 'react-redux'
import {loginThunk, socialRegThunk} from "../../state/authReducer";
import { Redirect } from "react-router-dom"
import {getAuthDude} from "../../selectors/selectors";

class LoginComponent extends React.Component{
    onSubmit = (data) =>{
        this.props.login(data)
    };

    socialRegSubmit = (email) =>{
        this.props.socialReg(email)
    };

    render() {
        if (this.props.state.isAuth) return <Redirect to={'/'}/>;

        return (
            <>
                <Login {...this.props} onSubmit={this.onSubmit} onSocialRegSubmit={this.socialRegSubmit}/>
            </>
        )
    }
}


let mapStateToProps = (state) => {
    return {
        state: getAuthDude(state)
    }
};



export default connect(mapStateToProps,{
    login: loginThunk,
    socialReg: socialRegThunk
})(LoginComponent);
