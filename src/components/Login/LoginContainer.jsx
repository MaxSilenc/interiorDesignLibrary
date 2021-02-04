import React from 'react';
import Login from "./Login";
import {connect} from 'react-redux'
import {loginThunk} from "../../state/authReducer";


class LoginComponent extends React.Component{

    onSubmit = (data) =>{
        this.props.login(data)
    };


    render() {
        return (
            <>
                <Login {...this.props} onSubmit={this.onSubmit}/>
            </>
        )
    }
}


let mapStateToProps = (state) => {
    return {
        state: state
    }
};



export default connect(mapStateToProps,{
    login: loginThunk
})(LoginComponent);
