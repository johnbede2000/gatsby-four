import * as React from "react"
import { Link } from "gatsby"

const NotFoundPage = () => {
  return (
    <main>
      <p>Page not found.</p>
      <Link to='/'>Home</Link>
    </main>
  )
}

export default NotFoundPage
