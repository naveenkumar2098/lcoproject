import React from "react"
import {graphql} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from '../components/Reusable/Herosection'
import Infoblock from "../components/Reusable/Infoblock"
import Dualinfoblock from "../components/Reusable/Dualinfoblock"
import CourseCart from "../components/Cart/CourseCart"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home"/>
    <HeroSection 
      img={data.img.childImageSharp.fluid}
      title="I Write Code"
      subtitle="LearnCodeOnline.in"
      heroclass="hero-background"
    />
    <Infoblock heading="About Us"/>
    <CourseCart courses={data.courses}/>
    <Dualinfoblock heading="Our Team" source="https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
  </Layout>
)

export const query = graphql`
{
  img: file(relativePath: {eq: "heromain.png"}){
    childImageSharp{
      fluid{
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
  courses:allContentfulCourses{
    edges{
      node{
        id
        title
        price
        category
        description{
          description
        }
        image{
          fixed(width:200, height:120){
            ...GatsbyContentfulFixed_tracedSVG
          }
        }
      }
    }
  }
}
`

export default IndexPage
