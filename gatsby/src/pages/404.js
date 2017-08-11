import React from 'react'
import Link from 'gatsby-link'

const NotFoundPage = () =>
  <div>
    <h1>Path Not Found</h1>
    <p>The requested path was not found.</p>
    <p>If you don't know why this happened, then it's probably a bug in the last page you were on.</p>
    <p>Please file a bug-report <Link to="https://github.com/EtherCX/EthereumSafePay/issues">here</Link> if it happens again.</p>
  </div>

export default NotFoundPage
