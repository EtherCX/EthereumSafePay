import React from 'react'
import Link from 'gatsby-link'

// TODO: Query the contract to find out if there are pending payments left to cancel.
// TODO: Populate a list of pending payents for cancellation.
// TODO: Enable the user to cancel a pending payment.
// TODO: Repopulate the list when finished

var Payments = () => {
  // TODO: get payments
  // TODO: populate this list
  return (<p>Sigh!</p>)
};

const SecondPage = () =>
  <div>
    <h1>Hi people</h1>
    <p>Welcome to page 2, ok?</p><Payments />
    <p>Got it</p>
    <Link to="../">Go back to the homepage</Link>
  </div>

export default SecondPage
