import React from 'react';
import Registration from "./Registration";
import {connect} from 'react-redux'
import {registrationThunk, socialRegThunk} from "../../state/authReducer";
import { Redirect } from "react-router-dom"
import {getAuthDude} from "../../selectors/selectors";

class RegComponent extends React.Component{
    onSubmit = (data) =>{
        this.props.registrationPLS(data);
    };

    socialRegSubmit = (email) =>{
        this.props.socialReg(email)
    };

    render() {
        if (this.props.state.isAuth) return <Redirect to={'/'}/>;

        return (
            <>
                <Registration {...this.props} onSubmit={this.onSubmit} onSocialRegSubmit={this.socialRegSubmit}/>
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
    registrationPLS: registrationThunk,
    socialReg: socialRegThunk
})(RegComponent);
