import React, { useContext } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { LOGIN_FAILURE_PAGE } from '../../utils/constants'
import { Button } from 'semantic-ui-react'
import { Context } from '../../stores/store'

function Secret(props) {
    const context = useContext(Context)

    const redirect = () => {
        props.history.push(LOGIN_FAILURE_PAGE)
    }

    return (
        <>
            <div className="App">
                Dashboard
                <br />
                <br />
                <Link to={LOGIN_FAILURE_PAGE}>Back to Main</Link>
                <br />
                <br />
                <Button onClick={() => context.auth.logout(redirect)}>
                    Log out
                </Button>
            </div>
        </>
    )
}

export default withRouter(Secret)
