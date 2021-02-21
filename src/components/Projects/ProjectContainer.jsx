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

    undefinedCheck = (page, theme, type) =>{
        if (theme === undefined) theme = 'all';
        if (type === undefined) type = 'all';
        if (page === undefined) page = 1;
        return {theme: theme, type: type, page: page}
    };

    componentDidMount() {
        let theme = this.props.match.params.theme;
        let type = this.props.match.params.type;
        let page = this.props.match.params.page;
        let search = this.props.location.search.slice(8);
        let urlChecked = this.undefinedCheck(page, theme, type);
        this.props.getProjects(urlChecked.page, urlChecked.theme, urlChecked.type, search)
    }

    onClickSetPage = (el) => {
        let nowTheme = this.props.state.nowTheme;
        let nowType = this.props.state.nowType;
        let search = this.props.location.search.slice(8);
        let urlChecked = this.undefinedCheck(el, nowTheme, nowType);
        this.props.getProjects(urlChecked.page, urlChecked.theme, urlChecked.type, search)
    };

    onClickSetTheme = (nowTheme, nowType, search) =>{
        let urlChecked = this.undefinedCheck( 1, nowTheme, nowType);
        this.props.getProjects(1, urlChecked.theme, urlChecked.type, search)
    };

    onClickSetSearch = (nowTheme, nowType, search) =>{
        let urlChecked = this.undefinedCheck( 1, nowTheme, nowType);
        this.props.getProjects(1, urlChecked.theme, urlChecked.type, search)
    };

    render() {
        return (
            <>
                {this.props.state.isFetching ? <Preloader/> : null}
                <Projects {...this.props} onClickSetPage={this.onClickSetPage} onClickSetTheme={this.onClickSetTheme}
                          onClickSetSearch={this.onClickSetSearch}/>
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
