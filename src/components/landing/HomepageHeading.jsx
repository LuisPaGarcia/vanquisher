import React, { useContext } from 'react'
import { Context } from '../../stores/store'
import { Container, Header, Button, Icon } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

function HomepageHeading(props) {
    const context = useContext(Context)
    const goToSecret = () => {
        props.history.push('/dashboard')
    }

    return (
        <Container text>
            <Header
                as="h1"
                content="Imagine-a-Company"
                inverted
                style={{
                    fontSize: props.mobile ? '2em' : '4em',
                    fontWeight: 'normal',
                    marginBottom: 0,
                    marginTop: props.mobile ? '1.5em' : '3em'
                }}
            />
            <Header
                as="h2"
                content="Do whatever you want when you want to."
                inverted
                style={{
                    fontSize: props.mobile ? '1.5em' : '1.7em',
                    fontWeight: 'normal',
                    marginTop: props.mobile ? '0.5em' : '1.5em'
                }}
            />
            {context.auth.isAuthenticated() ? (
                <Button onClick={goToSecret} primary size="huge">
                    Go to SECRET
                    <Icon name="right arrow" />
                </Button>
            ) : (
                <Button primary size="huge">
                    Get Started
                    <Icon name="right arrow" />
                </Button>
            )}
        </Container>
    )
}

HomepageHeading.propTypes = {
    mobile: PropTypes.bool
}

export default withRouter(HomepageHeading)
