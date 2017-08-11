import React from 'react'
import Link from 'gatsby-link'

var Sigh = () => {
  return (<p>Sigh!</p>)
};

const SecondPage = () =>
  <div>
    <h1>Hi people</h1>
    <p>Welcome to page 2, ok?</p><Sigh />
    <p>Got it</p>
    <Link to="../">Go back to the homepage</Link>
  </div>

export default SecondPage
