import React from "react"
import {graphql} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from '../components/Reusable/Herosection'
import Infoblock from "../components/Reusable/Infoblock"
import Dualinfoblock from "../components/Reusable/Dualinfoblock"
import Teamphotosection from "../components/About/Teamphotosection"

const AboutPage = ({data}) => (
  <Layout>
    <SEO title="About Us"/>
    <HeroSection 
      img={data.img.childImageSharp.fluid}
      title="About LearnCodeOnline"
      subtitle=""
      heroclass="about-background"
    />
    <Dualinfoblock heading="A Message from CEO" source="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJF4sAbMS7yEFB1_86rkbB3GtnNpY8pl94PgpxTJihQP3oxmqq&usqp=CAU"/>
    <Infoblock heading="Our Vision"/>
    <Teamphotosection />
  </Layout>
)

export const query = graphql`
{
  img: file(relativePath: {eq: "about.png"}){
    childImageSharp{
      fluid{
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`

export default AboutPage