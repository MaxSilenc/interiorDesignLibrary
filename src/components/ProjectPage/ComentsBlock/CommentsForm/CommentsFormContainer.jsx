import React from 'react';
import CommenstForm from '../CommentsForm/CommenstForm'
import {connect} from "react-redux";
import {compose} from "redux";
import {AuthCheck} from "./../../../../hoc/AuthCheck"


class CommenstFormComponent extends React.Component {

    render(){
        return (
            <CommenstForm {...this.props}/>
        );
    }
}




let mapStateToProps = (state) => {
    return {
    }
};


export default compose(
    connect(mapStateToProps, {}),
    AuthCheck
)(CommenstFormComponent);