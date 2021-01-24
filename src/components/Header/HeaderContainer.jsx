import React from 'react'
import Header from  './Header'
import * as axios from "axios";

class HeaderContainer extends React.Component{

    componentDidMount() {
        axios.get("http://127.0.0.1:8000/authUser", {
            withCredentials: true
        }).then(respons => {
            debugger;
        });
    }

    render() {
        return <Header {...this.props}/>
    }
}

export default HeaderContainer;