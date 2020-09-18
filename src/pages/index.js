import React from "react"
import { Link } from "gatsby"
import '../styles/layout.scss'

import Layout from "../components/Layout/Layout"
import About from '../components/About/About'
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <About />
  </Layout>
)

export default IndexPage
