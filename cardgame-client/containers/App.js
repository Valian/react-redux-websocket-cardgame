import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link, browserHistory } from 'react-router'
import { addTodo } from '../actions/index'
import List from '../components/List'
import Input from '../components/Input'

class App extends Component {

    render() {
        return (
            <div>
                TODOS
                <List items={this.props.todos} />
                <Input onSubmit={(text) => this.props.addTodo(text)}>
                    Add Todo
                </Input>
            </div>
        )
    }
}

App.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.string).isRequired,
    // Injected by React Router
    children: PropTypes.node
}

function mapStateToProps(state) {
    return {
        todos: state.todos
    }
}

let mapActionsToProps = {
    addTodo
}

export default connect(mapStateToProps, mapActionsToProps)(App)