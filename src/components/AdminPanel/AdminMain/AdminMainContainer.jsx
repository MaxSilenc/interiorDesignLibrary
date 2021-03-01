import React from 'react';
import {connect} from 'react-redux'
import {getAuthDude, getEmptyChats} from "../../../selectors/selectors";
import {compose} from "redux";
import { Redirect } from "react-router-dom"
import AdminPanel from './AdminMain'
import {getEmptyChatsThunk, setAdminToChatThunk} from './../../../state/adminPanelReducer'

class AdminMainComponent extends React.Component{

    componentDidMount() {
        this.props.getChats()
    }

    takeChat = (id, adminname) =>{
        this.props.setAdmin(id, adminname)
    };

    render() {
        if (!this.props.user.isAuth) return <Redirect to={'/'}/>;
        return (
            <AdminPanel {...this.props} takeChat={this.takeChat}/>
        )
    }
}


let mapStateToProps = (state) => {
    return {
        user: getAuthDude(state),
        emptyChats: getEmptyChats(state),
    }
};



export default compose(
    connect(mapStateToProps,{
        getChats: getEmptyChatsThunk,
        setAdmin: setAdminToChatThunk,
    }),
)(AdminMainComponent);
