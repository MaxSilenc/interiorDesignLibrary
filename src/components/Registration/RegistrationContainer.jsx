import React from 'react';
import Registration from "./Registration";
import {connect} from 'react-redux'
import {registrationThunk} from "../../state/authReducer";
import { Redirect } from "react-router-dom"
import {getAuthDude} from "../../selectors/selectors";

class RegComponent extends React.Component{
    onSubmit = (data) =>{
        this.props.registrationPLS(data);
    };


    render() {
        if (this.props.state.isAuth) return <Redirect to={'/'}/>;

        return (
            <>
                <Registration {...this.props} onSubmit={this.onSubmit}/>
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
    registrationPLS: registrationThunk
})(RegComponent);
