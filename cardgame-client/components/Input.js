import React, { Component, PropTypes } from 'react'

export default class Input extends Component {

    constructor(...args) {
        super(...args)
        this.state = {
            value: ''
        }
    }

    render() {
        return (
            <div>
                <input
                    value={this.state.value}
                    onChange={(event) => this.setState({value: event.target.value})}/>
                <button
                    onClick={() => this.handleSubmit()}
                    disabled={this.state.value == ''}>
                    {this.props.children}
                </button>
            </div>
        )
    }

    handleSubmit() {
        this.props.onSubmit(this.state.value)
        this.setState({value: ''})
    }
}

Input.propTypes = {
    onSubmit: PropTypes.func.isRequired
}