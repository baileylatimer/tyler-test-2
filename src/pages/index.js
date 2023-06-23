import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Hero from "../components/hero"
import ProjectCard from "../components/project-card"
import HomeAbout from "../components/home-about"
import HeroVideo from "../videos/hero.mp4"

import Img1 from "../images/img--01.jpg"
import Img2 from "../images/img--02.jpg"
import Img3 from "../images/img--03.jpg"
import Img4 from "../images/img--04.jpg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <HomeAbout />


  </Layout>
)

export default IndexPage
