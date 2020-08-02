import React from "react"
import {graphql} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from '../components/Reusable/Herosection'
import Infoblock from '../components/Reusable/Infoblock'
import ServicesProvided from "../components/Services/ServicesProvided"

const AboutPage = ({data}) => (
  <Layout>
    <SEO title="Services"/>
    <HeroSection 
      img={data.img.childImageSharp.fluid}
      title="Our Services"
      subtitle=""
      heroclass="service-background"
    />
    <Infoblock heading="Services"/>
    <ServicesProvided />
  </Layout>
)

export const query = graphql`
{
  img: file(relativePath: {eq: "service.png"}){
    childImageSharp{
      fluid{
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`

export default AboutPage