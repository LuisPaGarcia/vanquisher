import React from 'react'
import { Link } from 'react-router-dom'
import { LOGIN_SUCCESS_PAGE } from '../../utils/constants'
function Landing() {
  return (
    <>
      <h1>Landing!</h1>
      <Link to={LOGIN_SUCCESS_PAGE}>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4 mt-4">
          back to Landing
        </button>
      </Link>
    </>
  )
}
export default Landing
