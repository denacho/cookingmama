import React from 'react'
import Link from 'gatsby-link'
import './Header.css'

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasScrolled: false,
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 50) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }

  render() {
    return (
      <div
        className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}
      >
        <div className="HeaderGroup">
          <Link to="/">
            <img src={require('../imagescm/logo.png')} width="30" />
          </Link>
          <Link to="/home">HOME</Link>
          <Link to="/menu">MENU</Link>
          <Link to="/about">ABOUT</Link>
          <Link to="/subscribe">
            <button>Subscribe</button>
          </Link>
        </div>
      </div>
    )
  }
}

export default Header
