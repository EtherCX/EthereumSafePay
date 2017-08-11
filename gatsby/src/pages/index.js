import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () =>
  <div>
    <h1>Ethereum Safe Pay</h1>
    <p>Welcome Ethereum Safe Pay.</p>
    <Link to="/pay-now/">Make a payment now.</Link>
    <Link to="/pay-later/">Make a payment later.</Link>
    <Link to="/cancel-payment/">Cancel a payment you've sent.</Link>
    <Link to="/refund-payment/">Refund a payment you've received.</Link>
  </div>

export default IndexPage
