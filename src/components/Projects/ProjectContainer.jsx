import React from 'react';
import Projects from "./Projects";
import {connect} from 'react-redux'
import {getProjectsThunk} from "../../state/projectsPageReducer";
import Preloader from './../../components/common/Preloader/Preloader'
import {getProjectPage} from "../../selectors/selectors";


class ProjectsComponent extends React.Component{

    constructor(props) {
        super(props);
    }


    componentDidMount() {
        this.props.getProjects(this.props.state.nowPage)
    }

    onClickSetPage(el, props){
        props.getProjects(el)
    }

    render() {
        return (
            <>
                {this.props.state.isFetching ? <Preloader/> : null}
                <Projects {...this.props} onClickSetPage={this.onClickSetPage}/>
            </>
        )
    }
}


let mapStateToProps = (state) => {
    return {
        state: getProjectPage(state)
    }
};



const ProjectsContainer = connect(mapStateToProps,{
    getProjects: getProjectsThunk
})(ProjectsComponent);


export default ProjectsContainer;