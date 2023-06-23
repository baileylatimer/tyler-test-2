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
      <svg className="nav-logo" width="228" height="31" viewBox="0 0 228 31" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.3237 12.9039C9.31053 11.9007 6.62171 11.3388 6.62171 8.20855C6.62171 6.08158 8.66842 4.79737 12.0796 4.79737C16.0526 4.79737 18.1395 6.56316 18.5809 9.89408H23.3566C22.9553 3.99474 18.3803 0.703946 12.0796 0.703946C5.81908 0.703946 1.88618 3.55329 1.88618 8.65C1.88618 14.1079 6.74211 15.8336 11.2368 16.9572C16.8954 18.3618 19.3434 19.0039 19.3434 22.4151C19.3434 24.6224 17.698 26.5086 13.4441 26.5086C8.30724 26.5086 5.81908 24.1007 5.57829 20.4487H0.802632C1.08355 26.95 6.42105 30.602 13.4441 30.602C20.6678 30.602 24.1191 26.7895 24.1191 22.2145C24.1191 15.7934 19.4638 14.4691 13.3237 12.9039ZM32.8913 30H37.6669V5.35921H46.8169V1.30592H23.7011V5.35921H32.8913V30ZM71.105 20.2079V1.30592H66.3695V20.2079C66.3695 24.5421 64.2024 26.5086 59.7879 26.5086C55.4136 26.5086 53.2465 24.5421 53.2465 20.2079V1.30592H48.4708V20.2079C48.4708 26.4684 51.8017 30.602 59.7879 30.602C67.7741 30.602 71.105 26.4684 71.105 20.2079ZM74.4356 30H85.7126C93.6586 30 98.354 24.9033 98.354 15.673C98.354 6.44276 93.4981 1.30592 85.5922 1.30592H74.4356V30ZM79.2113 5.35921H85.3514C91.7725 5.35921 93.5784 10.175 93.5784 15.673C93.5784 21.1711 91.7725 25.9467 85.3514 25.9467H79.2113V5.35921ZM101.059 1.30592V30H105.835V1.30592H101.059ZM122.771 30.602C131.4 30.602 136.857 24.2612 136.857 15.6329C136.857 7.0046 131.4 0.703946 122.771 0.703946C114.103 0.703946 108.685 7.0046 108.685 15.6329C108.685 24.2612 114.103 30.602 122.771 30.602ZM122.771 26.5086C116.19 26.5086 113.421 21.452 113.421 15.6329C113.421 9.85395 116.19 4.79737 122.771 4.79737C129.353 4.79737 132.082 9.85395 132.082 15.6329C132.082 21.452 129.353 26.5086 122.771 26.5086Z" fill="black"/>
      <path d="M169.694 13.1122L141 13.1122L141 17.8878L169.694 17.8878L169.694 13.1122Z" fill="black"/>
      <path d="M174.142 30H178.918V18.9237H185.941C192.843 18.9237 190.155 28.7961 191.479 30H196.495V29.7191C194.97 29.2375 197.378 18.0007 190.757 16.7566V16.6763C194.047 15.8737 196.094 13.5461 196.094 9.53289C196.094 4.31579 192.282 1.30592 186.382 1.30592H174.142V30ZM178.918 5.35921H185.379C188.309 5.35921 191.359 5.96118 191.359 10.0947C191.359 14.2684 188.309 14.8303 185.379 14.8303H178.918V5.35921ZM211.807 30.602C220.435 30.602 225.893 24.2612 225.893 15.6329C225.893 7.0046 220.435 0.703946 211.807 0.703946C203.138 0.703946 197.721 7.0046 197.721 15.6329C197.721 24.2612 203.138 30.602 211.807 30.602ZM211.807 26.5086C205.225 26.5086 202.456 21.452 202.456 15.6329C202.456 9.85395 205.225 4.79737 211.807 4.79737C218.388 4.79737 221.117 9.85395 221.117 15.6329C221.117 21.452 218.388 26.5086 211.807 26.5086Z" fill="black"/>
      </svg>
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
            to={`/showreel`}
            className="block mt-4 mr-4 lg:inline-block lg:mt-0 "
          >
            Showreel
          </Link>
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
