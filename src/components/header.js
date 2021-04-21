import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    className={`nav ${typeof window !== 'undefined' && window.location.pathname!=='/' && 'active'}`}
    id="nav"
  >
    <Link to="/">home</Link>
    <Link to="/sesh">sesh</Link>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
