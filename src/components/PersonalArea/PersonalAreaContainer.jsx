import React from 'react';
import PersonalArea from "./PersonalArea";
import {connect} from 'react-redux'
import {compose} from "redux";
import { Redirect } from "react-router-dom"
import {getAuthDude} from "../../selectors/selectors";
import {changeCredThunk} from "../../state/authReducer";

class PersonalAreaContainer extends React.Component{

    checkChangeData = (data) =>{
        if (data.login === undefined) data.login = '';
        if (data.email === undefined) data.email = '';
        if (data.name === undefined) data.name = '';
        if (data.lastName === undefined) data.lastName = '';
        return data;
    };

    onSubmitChangeCred = (data) =>{
        this.props.changeCred(this.checkChangeData(data), this.props.user.userId)
    };

    render() {
        if (!this.props.user.isAuth) return <Redirect to={'/'}/>;
        return (
            <>
                <PersonalArea {...this.props} onSubmit={this.onSubmitChangeCred}/>
            </>
        )
    }
}


let mapStateToProps = (state) => {
    return {
        user: getAuthDude(state)
    }
};


export default compose(
    connect(mapStateToProps,{
        changeCred: changeCredThunk,
    }),
)(PersonalAreaContainer);
