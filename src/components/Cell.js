import React from 'react'
import styled from 'styled-components'
import './Cell.css'

const CellColumn = styled.div`
  display: grid;
  grid-template-columns: 60px auto;
  grid-gap: 25px;
  align-items: center;
`

const CellImage = styled.div`
  width: 60px;
  height: 60px;
  background: #c4c4c4;
  border-radius: 10px;
  background-image: url(${(props) => props.image});
  background-size: 60px;
`

const CellTitle = styled.div`
  font-size: 24px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 30px 0;
`

// const Cell = (props) => (
//   <CellGroup>
//     <CellImage image={props.image}></CellImage>
//     <CellTitle>{props.title}</CellTitle>
//   </CellGroup>
// )

const Cell = () => (
  <div className="CellGroup">
    <div className="CellGroupLeft">
      <div className="CellImage">
        <img src={require('.././imagescm/section1.png')} width="60" />
      </div>
      <p> Introduction</p>

      <div className="CellImage">
        <img src={require('.././imagescm/section2.png')} width="60" />
      </div>
      <p> Kitchen setup: Cookware</p>

      <div className="CellImage">
        <img src={require('.././imagescm/section3.png')} width="60" />
      </div>
      <p> Fruit and Vegetables</p>

      <div className="CellImage">
        <img src={require('.././imagescm/section4.png')} width="60" />
      </div>
      <p> Kitchen setup: Cookware</p>
    </div>

    <div className="CellGroupRight">
      <div className="CellImage">
        <img src={require('.././imagescm/section5.png')} width="60" />
      </div>
      <p> Boiled and scrambled eggs</p>

      <div className="CellImage">
        <img src={require('.././imagescm/section6.png')} width="60" />
      </div>
      <p> Noodle: Dough</p>

      <div className="CellImage">
        <img src={require('.././imagescm/section7.png')} width="60" />
      </div>
      <p> Homemade Tortilla</p>

      <div className="CellImage">
        <img src={require('.././imagescm/section8.png')} width="60" />
      </div>
      <p> Cooking Philosophies</p>
    </div>
  </div>
)

export default Cell
