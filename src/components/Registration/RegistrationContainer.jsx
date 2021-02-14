import React from 'react';
import Registration from "./Registration";
import {connect} from 'react-redux'
import {registrationThunk} from "../../state/authReducer";

class RegComponent extends React.Component{
    onSubmit = (data) =>{
        this.props.registrationPLS(data);
    };


    render() {
        return (
            <>
                <Registration {...this.props} onSubmit={this.onSubmit}/>
            </>
        )
    }
}


let mapStateToProps = (state) => {
    return state
};



export default connect(mapStateToProps,{
    registrationPLS: registrationThunk
})(RegComponent);
