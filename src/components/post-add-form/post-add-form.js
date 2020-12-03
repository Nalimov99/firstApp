import React from "react";

import "./post-add-form.css";

export default class PostAddForm extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
            inputText: ''
        }

        this.onTextChange = this.onTextChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onTextChange(e) {
        const value = e.target.value;
        this.setState(({inputText}) => {
            return {
                inputText: value
            }
        })
    }

    onSubmit(e) {
        e.preventDefault();
        if(this.state.inputText && this.state.inputText.trim().length > 0) {
            this.props.onAdd(this.state.inputText);
        }
        this.setState(({inputText: ''}));
    }


    render() {
        return (
            <form className="bottom-panel d-flex" onSubmit={this.onSubmit}>
                <input
                    type="text"
                    placeholder="О чем вы думаете сейчас?"
                    className="form-control new-post-label"
                    onChange={this.onTextChange}
                    value = {this.state.inputText}/>
                <button
                    type="submit"
                    className="btn btn-outline-secondary">
                    Добавить
                </button>
            </form>
        )
    }
}

