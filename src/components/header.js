import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import Timezone from './date'
import Timezone2 from './date-2'


function Header({ siteTitle }) {
  const [isExpanded, toggleExpansion] = useState(false)

  return (
    <nav className="flex flex-wrap items-center justify-between py-3 lg:p-6 mx-d mb-6 bg-background">
      <div className="flex items-center flex-shrink-0 mr-6 text-white px-d ">
      <Link
            to={`/`}
            className=" mb-0"
          >
 Tyler Gordon
      </Link>

      </div>
      <div className="block lg:hidden px-d ">
        <button
          onClick={() => toggleExpansion(!isExpanded)}
          className="flex items-center px-3 py-2 "
        >
          <svg
            className="w-7 h-7 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`${
          isExpanded ? `block` : `hidden`
        } w-full nav-open block lg:flex lg:items-center lg:w-auto mt-4 pt-4 lg:mt-0 lg:pt-0 px-d `}
      >
        <div className="text-sm">
          <Link
            to={`/about`}
            className="block mt-4 mr-4 lg:inline-block lg:mt-0 "
          >
            About
          </Link>
          <Link
            to={`/contact`}
            className="block mt-4 mr-4 lg:inline-block lg:mt-0 "
          >
            Contact
          </Link>
          
        </div>
        <div>
        </div>
      </div>
      <div className="hidden lg:flex font-base">
        <Timezone />
        <Timezone2 />

      </div>
    </nav>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
