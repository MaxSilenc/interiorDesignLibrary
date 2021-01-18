import React from 'react';
import SliderSection from "./SliderSection";
import {connect} from 'react-redux'


let mapStateToProps = (state) => {
    return {
        state: state.sliderSectionPage.slideArr
    }
};

// let mapDispatchToProps = (dispatch) => {
//     return {
//         updateNewProject: (text, title) => {dispatch(updateNewProjectActionCreator(text, title))},
//         addProject: () => {dispatch(addProjectActionCreator())}
//     }
// };


const SliderSectionContainer = connect(mapStateToProps)(SliderSection);


export default SliderSectionContainer;