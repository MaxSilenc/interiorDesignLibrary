import React from 'react';
import {connect} from 'react-redux'
import {getAuthDude} from "../../../selectors/selectors";
import {compose} from "redux";
import { Redirect } from "react-router-dom"
import Statistics from './Statistics'
import {withRouter} from 'react-router-dom'
import {getStatThunk} from  './../../../state/statisticsReducer'

class AdminUsersComponent extends React.Component{

    componentDidMount() {
        this.props.getStat()
    }

    render() {
        if (!this.props.user.isAuth) return <Redirect to={'/'}/>;
        if (!this.props.user.status) return <Redirect to={'/'}/>;
        return (
            <Statistics {...this.props}/>
        )
    }
}


let mapStateToProps = (state) => {
    return {
        user: getAuthDude(state),
        stat: state.statistics,
    }
};



export default compose(
    connect(mapStateToProps,{
        getStat: getStatThunk,
    }),
    withRouter
)(AdminUsersComponent);
