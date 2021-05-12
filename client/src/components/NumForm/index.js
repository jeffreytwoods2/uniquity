import React from "react";
import "./style.css";
import API from "../../utils/API";

function StatusEl(props) {
    if (props.status === "unique") {
        return <p className="fs-1" style={{ color: "green" }} id="confirm">Unique!</p>;
    } else if (props.status === "taken") {
        return <p className="fs-1" style={{ color: "red" }} id="confirm">Not Unique :/</p>;
    } else if (props.status === "invalid") {
        return <p className="fs-1" style={{ color: "red" }} id="confirm">That's not a number &gt;:(</p>;
    } else if (props.status === "null") {
        return <p className="fs-1" style={{ color: "red" }} id="confirm">You didn't send anything :(</p>;
    } else {
        return null;
    }
}

class NumForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            value: '',
            status: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        API.saveNum({
            submission: this.state.value
        })
            .then(res => {
                if (res.data.errors) {
                    if (res.data.errors.submission.name === "CastError") {
                        this.setState({
                            status: "invalid"
                        });
                    } else if (res.data.errors.submission.name === "ValidatorError") {
                        this.setState({
                            status: "null"
                        });
                    }
                } else if (res.data.name === "MongoError") {
                    this.setState({
                        status: "taken"
                    });
                } else {
                    this.setState({
                        status: "unique"
                    });
                }
            })
            .catch(err => console.log(err));
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
                <StatusEl status={this.state.status} />
            </div>
        );
    }
}

export default NumForm;