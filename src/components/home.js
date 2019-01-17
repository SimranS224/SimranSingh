import React, { Component } from "react";
import { Grid, Cell } from 'react-mdl';
class Home extends Component {
  render() {
    return (
      <div style={{ width: '100%', margin: 'auto' }}>
        <Grid className="home">
          <Cell col={12}>
            <centre>
              <img src="https://i.imgur.com/hRLYj5A.jpg" alt="https://i.imgur.com/hRLYj5A.jpg" className="portrait"
              /></centre>

            <div className="about">
              <hr />
              <h5>Software Developer</h5>
              <p>
                My name is Simran Singh and I'm currently studying Computer Science at the University of Toronto.
      One of passions has always been designing products that help improve efficiency or that simply create a new way of doing a task.
      I'm driven to look for oppuruntinies where I can create innovative projects to help solve problems.
      Be it at a hackathon or on long term projects I always try to incorporate new technologies into projects I work on.
            </p>


            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Home;