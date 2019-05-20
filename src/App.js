import React, {Component} from 'react';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl'
import Main from './components/Main'
import { Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
        <div className="demo-big-content">
          <Layout>
            <Header className='header-color' title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">Austin Puckett</Link>} scroll>
              <Navigation>
                {/*<Link to="/">Home</Link>*/}
                <Link to='/about'>About</Link>
                <Link to='/resume' target="_blank" rel="noopener noreferrer">Resume</Link>
                <Link to='/projects'>Projects</Link>
                <Link to='/contact'>Contact</Link>
              </Navigation>
            </Header>
            <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">Austin Puckett</Link>}>
              <Navigation>
                <Link to='/about'>About</Link>
                <Link to='/resume' target="_blank" rel="noopener noreferrer">Resume</Link>
                <Link to='/projects'>Projects</Link>
                <Link to='/contact'>Contact</Link>
              </Navigation>
            </Drawer>
            <Content>
              <div className="page-content" />
              <Main />
            </Content>
          </Layout>
        </div>
    )
  }
}

export default App;
