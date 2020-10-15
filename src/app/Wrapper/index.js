import React from 'react'
import Navbar from '../../components/shared/Navbar'

export default function Wrapper(Page, ...props) {
  return class extends React.Component {
    render() {
      return (
        <>
          <Navbar />
          <Page />
        </>
      )
    }
  }
}
