import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card'
import Footer from '../components/Footer'
import Section from '../components/Section'
import Wave from '../components/Wave'
import staticdata from '../../staticdata.json'
import Cell from '../components/Cell'
import styled from 'styled-components'

const SectionCaption = styled.p`
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  color: #94a4ba;
  text-align: center;
`

const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  padding: 0 20px;
  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>
          Bring your <br />
          fancy food <br /> to home
        </h1>
        <p>9 easy dinner inspiration.</p>
        <Link to="/page-2/">Watch the video</Link>
        <Wave />
      </div>
    </div>
    <div className="Cards">
      <h2> 9 courses, more coming</h2>
      <div className="CardGroup">
        <Card title="Fried Rice" image={require('../imagescm/course1.jpg')} />
        <Card
          title="Avocado Mixed"
          image={require('../imagescm/course2.jpg')}
        />
        <Card title="Bento Kit" image={require('../imagescm/course3.jpg')} />
        <Card
          title="Vegan Brocolli"
          image={require('../imagescm/course4.jpg')}
        />
        <Card title="Poke Bowl" image={require('../imagescm/course5.jpg')} />
        <Card
          title="Tortilla Beef"
          image={require('../imagescm/course6.jpg')}
        />
        <Card
          title="Homade Noodle"
          image={require('../imagescm/course7.jpeg')}
        />
        <Card
          title="Chicken Crispy"
          image={require('../imagescm/course8.jpeg')}
        />
        <Card
          title="Aglio E Olio "
          image={require('../imagescm/course9.jpeg')}
        />
      </div>
    </div>
    <Section
      image={require('../imagescm/wallpaper2.jpg')}
      text="Learn how to confit vegetables, poach perfect eggs,
      make hand-shaped pasta, and bring 
      Michelin star-quality meals to your kitchen."
    />
    <SectionCaption>8 sections - 4 hours</SectionCaption>
    {/* <SectionCellGroup>
      {staticdata.cells.map((cell) => (
        <Cell title={cell.title} image={cell.image} />
      ))}
    </SectionCellGroup> */}
    <Cell />
    <Footer />
  </div>
)

export default IndexPage
