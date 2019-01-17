import React, { Component } from 'react';
import {Header, Navigation,Content, Layout} from 'react-mdl';
import Routepath from './components/route'
import './App.css';
import {Link} from "react-router-dom";
class App extends Component {
  render() {
    return (
      <div className="App">
        <div style={{height: '1000px', position: 'relative'}}>
            <Layout style={{background: 'url(https://i.imgur.com/jLXHG4P.jpg?1) center / cover'}}>
                <Header transparent title="" style={{color: 'Blue'}}>
                    <Navigation>
                        <Link color="blue" to="/">Home</Link>
                        <Link color="blue" to="/projects">Projects</Link>
                        <Link color="blue" to="/contact">Contact</Link>
                    </Navigation>
                </Header>
               
                <Content>
                  <Routepath/>
                </Content>
            </Layout>
        </div>
      </div>
    );
  }
}

export default App;
