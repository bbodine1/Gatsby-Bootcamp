import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact</h1>

      <h3>Bio</h3>
      <p>This is a little blurb about me.</p>
      <p>
        Contact me at <a href="https://twitter.com">bbodine</a> on Twitter!
      </p>
    </Layout>
  )
}

export default ContactPage