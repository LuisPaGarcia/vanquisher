import React, { useContext } from 'react'
import { Context } from '../../stores/store'

function AppTitle() {
    const { appTitle } = useContext(Context)
    return <h1>{appTitle}</h1>
}

export { AppTitle }
