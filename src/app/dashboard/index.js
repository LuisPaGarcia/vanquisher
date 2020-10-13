import React from 'react'
import { Link } from 'react-router-dom'
import { LOGIN_FAILURE_PAGE } from '../../utils/constants'

export default function Dashboard() {
  return (
    <>
      <h1>Dashboard!</h1>
      <Link to={LOGIN_FAILURE_PAGE}>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4 mt-4">
          back to Landing
        </button>
      </Link>
    </>
  )
}
