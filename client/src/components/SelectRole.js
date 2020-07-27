import React from "react";
import 'materialize-css'
import 'materialize-css/dist/css/materialize.min.css'

export class SelectRole extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: null};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
           <>
               <form action="#">
                   <p>
                       <label>
                           <input type="checkbox"/>
                           <span>Red</span>
                       </label>
                   </p>
                   
               </form>
           </>
        );
    }
}