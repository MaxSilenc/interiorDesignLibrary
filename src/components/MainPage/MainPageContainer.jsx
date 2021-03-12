import React from 'react';
import {connect} from 'react-redux'
import MainPage from './MainPage'
import {getProjectsThunk} from "../../state/sliderSectionPageReducer";
import {getSlides} from "../../selectors/selectors";

class MainPageContainer extends React.Component {

    componentDidMount() {
        this.props.getProjects(1, "all")
    }

    render(){
        return (
            <MainPage {...this.props}/>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        state: getSlides(state),
        themes: state.sliderSectionPage.direction,
    }
};

export default connect(mapStateToProps, {
    getProjects: getProjectsThunk
})(MainPageContainer);