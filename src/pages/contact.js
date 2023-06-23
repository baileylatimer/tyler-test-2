import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import PageHeader from "../components/page-header"

import HeroVideo from "../videos/hero.mp4"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <PageHeader title="Contact"/>
<div className="contact flex flex-col justify-center items-center py-24 lg:py-40">
  <a tel="+1 (310) 489-6871">+1 (310) 489-6871</a>
  <a mailto="hello@rocio.dance">tgordonbusiness@gmail.com</a>
</div>

  </Layout>
)

export default ContactPage
