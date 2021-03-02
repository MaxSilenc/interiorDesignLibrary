import React from 'react';
import {connect} from 'react-redux'
import {getAuthDude, getEmptyChats, getMyChats, getMessages} from "../../../selectors/selectors";
import {compose} from "redux";
import { Redirect } from "react-router-dom"
import AdminPanel from './AdminMain'
import {getEmptyChatsThunk, setAdminToChatThunk, getMyChatsThunk,
    getMessagesThunk, updateMessageThunk, addMessageThunk} from './../../../state/adminPanelReducer'
import {withRouter} from 'react-router-dom'

class AdminMainComponent extends React.Component{

    componentDidMount() {
        this.props.getChats('None');
        this.props.myChats(this.props.user.login);
        this.props.getMyMessages(this.props.match.params.username)
    }

    onClickOpenChat = (username) =>{
        this.props.getMyMessages(username)
    };

    takeChat = (id, adminname) =>{
        this.props.setAdmin(id, adminname)
    };

    render() {
        if (!this.props.user.isAuth) return <Redirect to={'/'}/>;
        return (
            <AdminPanel {...this.props} takeChat={this.takeChat} openChat={this.onClickOpenChat} thisProject={this.props.match.params.id}/>
        )
    }
}


let mapStateToProps = (state) => {
    return {
        user: getAuthDude(state),
        emptyChats: getEmptyChats(state),
        myChatsList: getMyChats(state),
        myMessages: getMessages(state)
    }
};



export default compose(
    connect(mapStateToProps,{
        getChats: getEmptyChatsThunk,
        setAdmin: setAdminToChatThunk,
        myChats: getMyChatsThunk,
        getMyMessages: getMessagesThunk,
        updateMessage: updateMessageThunk,
        addMessage: addMessageThunk,
    }),
    withRouter
)(AdminMainComponent);
