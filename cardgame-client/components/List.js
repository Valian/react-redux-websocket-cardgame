import React, { Component, PropTypes } from 'react'

export default class List extends Component {
    render() {
        return (
            <ul>
                {this.props.items.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
        )
    }
}

List.propTypes = {
    items: PropTypes.arrayOf(PropTypes.string).isRequired
}