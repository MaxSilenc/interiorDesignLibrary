import React from 'react';
import PersonalArea from "./PersonalArea";
import {connect} from 'react-redux'
import {compose} from "redux";
import { Redirect } from "react-router-dom"
import {getAuthDude} from "../../selectors/selectors";

class PersonalAreaContainer extends React.Component{

    componentDidMount() {
    }

    render() {
        if (!this.props.user.isAuth) return <Redirect to={'/'}/>;
        return (
            <>
                <PersonalArea {...this.props}/>
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
    }),
)(PersonalAreaContainer);
