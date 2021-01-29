import React from 'react';
import {connect} from 'react-redux'
import MainPage from './MainPage'
import {getProjectsThunk} from "../../state/sliderSectionPageReducer";

class MainPageContainer extends React.Component {

    componentDidMount() {
        this.props.getProjects(1)
    }

    render(){
        return (
            <MainPage {...this.props}/>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        state: state.sliderSectionPage.slideArr
    }
};

export default connect(mapStateToProps, {
    getProjects: getProjectsThunk
})(MainPageContainer);