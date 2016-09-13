import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link, browserHistory } from 'react-router'
import * as actions from '../actions/index'
import List from '../components/List'
import Input from '../components/Input'

class App extends Component {

    render() {
        return (
            <div>
                DIFF
            </div>
        )
    }
}

App.propTypes = {
    // Injected by React Router
    children: PropTypes.node
}

function mapStateToProps(state) {
    return {}
}

export default connect(mapStateToProps, actions)(App)