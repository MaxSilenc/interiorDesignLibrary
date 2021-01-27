import React from 'react'
import Header from  './Header'
import {connect} from 'react-redux'
import {setUserActionCreator} from './../../state/authReducer'
import {currUser} from "../../api/api";

class HeaderContainer extends React.Component{

    componentDidMount() {
        currUser().then(data => {
            this.props.setUser(data.id, data.email, data.login)
        });
    }
    render() {
        return <Header {...this.props}/>
    }
}

let mapStateToProps = (state) => {
    return {
        state: state.auth
    }
};

export default connect(mapStateToProps, {
    setUser: setUserActionCreator,
})(HeaderContainer);