import Styles from "./projectsForm.module.css";
import React from "react";

export class FieldFileInput extends React.Component{
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this)
    }

    onChange(e) {
        const { input: { onChange } } = this.props;
        onChange(e.target.files);
    }

    render(){
        return(
            <div>
                <input type='file' onChange={this.onChange} {...this.props}/>
            </div>
        )
    }
}


