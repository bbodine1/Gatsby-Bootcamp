import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const AboutPage = () => {
  return (
    <Layout>
      <h1>About</h1>
      <h3>Bio</h3>
      <p>This is a little blurb about me.</p>
      <p>
        Contact me over here on the <Link to="/contact">contact page</Link>.
      </p>
    </Layout>
  )
}

export default AboutPage