import PropTypes from 'prop-types'
import React, { useState, useContext } from 'react'
import {
    Responsive,
    Sidebar,
    Menu,
    Segment,
    Container,
    Button,
    Icon,
} from 'semantic-ui-react'
import { Context } from '../../stores/store'
import { LOGIN_SUCCESS_PAGE, LOGIN_FAILURE_PAGE } from '../../utils/constants'
import HomepageHeading from './HomepageHeading'
import { withRouter } from 'react-router-dom'
const getWidth = () => {
    const isSSR = typeof window === 'undefined'

    return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

function MobileContainer(props) {
    const [sidebarOpened, setSidebarOpened] = useState()

    const handleSidebarHide = () => setSidebarOpened(false)

    const handleToggle = () => setSidebarOpened(true)
    const context = useContext(Context)
    const cbLogIn = () => {
        props.history.push(LOGIN_SUCCESS_PAGE)
    }

    const cbLogOut = () => {
        props.history.push(LOGIN_FAILURE_PAGE)
    }

    return (
        <Responsive
            as={Sidebar.Pushable}
            getWidth={getWidth}
            maxWidth={Responsive.onlyMobile.maxWidth}
        >
            <Sidebar
                as={Menu}
                animation="push"
                inverted
                onHide={handleSidebarHide}
                vertical
                visible={sidebarOpened}
            >
                <Menu.Item as="a" active>
                    Home
                </Menu.Item>
                <Menu.Item as="a">Work</Menu.Item>
                <Menu.Item as="a">Company</Menu.Item>
                <Menu.Item as="a">Careers</Menu.Item>
                {context.auth.isAuthenticated() ? (
                    <Menu.Item
                        as="a"
                        onClick={() => context.auth.logout(cbLogOut)}
                    >
                        Log Out
                    </Menu.Item>
                ) : (
                    <Menu.Item
                        as="a"
                        onClick={() => context.auth.login(cbLogIn)}
                    >
                        Log in
                    </Menu.Item>
                )}
                <Menu.Item as="a">Sign Up</Menu.Item>
            </Sidebar>

            <Sidebar.Pusher dimmed={sidebarOpened}>
                <Segment
                    inverted
                    textAlign="center"
                    style={{ minHeight: 350, padding: '1em 0em' }}
                    vertical
                >
                    <Container>
                        <Menu inverted pointing secondary size="large">
                            <Menu.Item onClick={handleToggle}>
                                <Icon name="sidebar" />
                            </Menu.Item>
                            <Menu.Item position="right">
                                {context.auth.isAuthenticated() ? (
                                    <Button
                                        onClick={() =>
                                            context.auth.logout(cbLogOut)
                                        }
                                        inverted
                                    >
                                        Log Out
                                    </Button>
                                ) : (
                                    <Button
                                        onClick={() =>
                                            context.auth.login(cbLogIn)
                                        }
                                        inverted
                                    >
                                        Log in
                                    </Button>
                                )}
                                <Button
                                    as="a"
                                    inverted
                                    style={{ marginLeft: '0.5em' }}
                                >
                                    Sign Up
                                </Button>
                            </Menu.Item>
                        </Menu>
                    </Container>
                    <HomepageHeading mobile />
                </Segment>
            </Sidebar.Pusher>
        </Responsive>
    )
}

MobileContainer.propTypes = {
    children: PropTypes.node,
}

export default withRouter(MobileContainer)
