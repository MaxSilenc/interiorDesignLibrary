import React from 'react';
import Projects from "./Projects";
import {connect} from 'react-redux'
import {getProjectsThunk} from "../../state/projectsPageReducer";
import Preloader from './../../components/common/Preloader/Preloader'
import {getProjectPage} from "../../selectors/selectors";
import {withRouter} from 'react-router-dom'
import {compose} from "redux";

class ProjectsComponent extends React.Component{

    constructor(props) {
        super(props);
    }


    componentDidMount() {
        let themeId = this.props.match.params.themeId;
        this.props.getProjects(this.props.state.nowPage, themeId)
    }

    onClickSetPage(el, props){
        props.getProjects(el, props.state.nowTheme)
    }

    onClickSetTheme = (nowTheme) =>{
        this.props.getProjects(1, nowTheme)
    };

    render() {
        return (
            <>
                {this.props.state.isFetching ? <Preloader/> : null}
                <Projects {...this.props} onClickSetPage={this.onClickSetPage} onClickSetTheme={this.onClickSetTheme}/>
            </>
        )
    }
}


let mapStateToProps = (state) => {
    return {
        state: getProjectPage(state)
    }
};



export default compose(
    connect(mapStateToProps,{
        getProjects: getProjectsThunk,
    }),
    withRouter
)(ProjectsComponent);
