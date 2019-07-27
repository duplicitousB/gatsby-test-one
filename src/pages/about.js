import React from 'react'
import {Link} from 'gatsby'

import Layout from '../components/layout'

const About = () => (
  <Layout>
    <h1>This is the layout</h1>
    <p>some quick text</p>
    <Link to='/'>Home</Link>
  </Layout>
)

export default About