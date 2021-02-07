import React from 'react';
import Login from "./Login";
import {connect} from 'react-redux'
import {loginThunk} from "../../state/authReducer";
import { Redirect } from "react-router-dom"
import {getAuthDude} from "../../selectors/selectors";

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
        state: getAuthDude(state)
    }
};



export default connect(mapStateToProps,{
    login: loginThunk
})(LoginComponent);
