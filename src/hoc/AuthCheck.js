import React from 'react';
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        user: state.auth
    }
};

export const AuthCheck = (Component) =>{
    class AuthCheckComponent extends React.Component{
        render(){
            if (!this.props.user.isAuth) return (
                <div>
                    You need login to write comments!
                </div>
            );
            return (
                <Component {...this.props}/>
            );
        }
    }
    return connect(mapStateToProps)(AuthCheckComponent)
};