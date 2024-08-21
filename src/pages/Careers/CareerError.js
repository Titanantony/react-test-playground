import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

function CareerError() {
    const error = useRouteError()
  return (
    <>
    <h2>Error</h2>
    <h3>{error.message}</h3>
    <Link to="/">Back to homepage</Link>
    </>
  )
}

export default CareerError