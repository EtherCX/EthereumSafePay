import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () =>
  <div>
    <h1>Ethereum Safe Pay</h1>
    <p>Welcome Ethereum Safe Pay.</p>
    <p><Link to="/pay-now/">Make a payment now.</Link></p>
    <p><Link to="/pay-later/">Make a payment later.</Link></p>
    <p><Link to="/cancel-payment/">Cancel a payment you've sent.</Link></p>
    <p><Link to="/refund-payment/">Refund a payment you've received.</Link></p>
  </div>

export default IndexPage
