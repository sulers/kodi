import { Link } from "react-router-dom"

function NotFound() {
  return (
    <div>
      404 | Page Not Found
      <Link to="/">Home page</Link>
    </div>
  )
}

export default NotFound
