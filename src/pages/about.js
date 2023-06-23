import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import PageHeader from "../components/page-header"
import TextCard from "../components/text-card"
import ContactBanner from "../components/contact-banner"
import TableauComponent from "../components/table"
import Resume from "../components/resume"


import HeroVideo from "../videos/hero.mp4"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <PageHeader title="About"/>
    <StaticImage src="../images/1-2.jpg" alt="Tyler Gordon • Real Estate" objectFit="cover" height="1200" width="2000" />

    <Resume/>
    <TableauComponent/>
  </Layout>
)

export default AboutPage
