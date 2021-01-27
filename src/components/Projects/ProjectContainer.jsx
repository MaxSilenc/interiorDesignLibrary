import React from 'react';
import Projects from "./Projects";
import {connect} from 'react-redux'
import {setProjectsActionCreator, setPageNumberActionCreator,
    setProjectsCountActionCreator, setIsFetchingActionCreator} from "../../state/projectsPageReducer";
import Preloader from './../../components/common/Preloader/Preloader'
import {getProjects} from './../../api/api'


class ProjectsComponent extends React.Component{

    constructor(props) {
        super(props);
    }


    componentDidMount() {
        this.props.setisFetching(true);
        getProjects(this.props.state.nowPage).then(data => {
            this.props.setisFetching(false);
            this.props.setCount(data.count);
            this.props.setProjects(data.items);
        });
    }

    onClickSetPage(el, props){
        props.setPage(el);
        props.setisFetching(true);
        getProjects(el).then(data => {
            props.setisFetching(false);
            props.setProjects(data.items);
        });
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
        state: state.projectsPage
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        setProjects: (ProjectsArr) => {dispatch(setProjectsActionCreator(ProjectsArr))},
        setPage: (page) => {dispatch(setPageNumberActionCreator(page))},
        setCount: (count) => {dispatch(setProjectsCountActionCreator(count))},
        setisFetching: (bool) => {dispatch(setIsFetchingActionCreator(bool))}
    }
};


const ProjectsContainer = connect(mapStateToProps,{
    setProjects: setProjectsActionCreator,
    setPage: setPageNumberActionCreator,
    setCount: setProjectsCountActionCreator,
    setisFetching: setIsFetchingActionCreator
})(ProjectsComponent);


export default ProjectsContainer;