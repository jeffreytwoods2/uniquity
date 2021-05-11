import React from "react";
import "./style.css";

class NumForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        // TODO: submit body to mongo
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="mb-3" id="number-form">
                    <label className="form-label fs-1">Type your number here:</label>
                    <div className="input-group mb-3">
                        <input type="text" value={this.state.value} onChange={this.handleChange} className="form-control" id="number-input" />
                        <input type="submit" value="Full Send" className="btn btn-primary" id="submit-btn" />
                    </div>
                </form>
            </div>
        );
    }
}

export default NumForm;