import React from 'react';
import Projects from "./Projects";
import {connect} from 'react-redux'
import {setProjectsActionCreator, setPageNumberActionCreator, setProjectsCountActionCreator} from "../../state/projectsPageReducer";
import * as axios from "axios";


class ProjectsComponent extends React.Component{

    constructor(props) {
        super(props);
    }


    componentDidMount() {
        axios.get("http://127.0.0.1:8000/reactTest?page=" + this.props.state.nowPage).then(respons => {
            this.props.setCount(respons.data.count);
            this.props.setProjects(respons.data.items);
        });
    }

    onClickSetPage(el, props){
        props.setPage(el);
        axios.get("http://127.0.0.1:8000/reactTest?page=" + el).then(respons => {
            props.setProjects(respons.data.items);
        });
    }

    render() {
        return (
            <Projects {...this.props} onClickSetPage={this.onClickSetPage}/>
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
        setCount: (count) => {dispatch(setProjectsCountActionCreator(count))}
    }
};


const ProjectsContainer = connect(mapStateToProps, mapDispatchToProps)(ProjectsComponent);


export default ProjectsContainer;