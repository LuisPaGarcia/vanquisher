import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { LOGIN_SUCCESS_PAGE } from '../../utils/constants'
import { Button } from '@chakra-ui/core'
import { AppTitle } from './AppTitle'

export default class Main extends Component {
    redirect = () => {
        this.props.history.push(LOGIN_SUCCESS_PAGE)
    }
    render() {
        return (
            <div className="App">
                <AppTitle />
                {this.props.auth.isAuthenticated() ? (
                    <span>
                        Go to <Link to={LOGIN_SUCCESS_PAGE}>Dashboard</Link>
                    </span>
                ) : (
                    <div>
                        Please log first
                        <br />
                        <br />
                        <Button
                            variantColor="teal"
                            border="none"
                            onClick={() => this.props.auth.login(this.redirect)}
                        >
                            Login
                        </Button>
                    </div>
                )}
            </div>
        )
    }
}