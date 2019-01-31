import React, { Component } from 'react';
import {Grid, Cell, Button} from "react-mdl";
import Education from './education';
import Skills from './skills';
import { SocialIcon } from 'react-social-icons';


class Contact extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell className="left-col" col={4}>


            <h1 style={{paddingTop: '2em'}}>Contact</h1>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <SocialIcon rel="noopener noreferrer" target="_blank" url="https://www.linkedin.com/in/simran-singhuoftcs/" />
            {/* <Button> <a href="https://github.com/SimranS224/personalsite/blob/master/src/content/SimranSinghResume.pdf" rel="noopener noreferrer" target="_blank">Resume</a></Button> */}
            <Button><a rel="noopener noreferrer" target='_blank' href={require('../content/SimranSinghResume.pdf')}>PDF Doc</a></Button>


            {/* <Button> <a href="https://github.com/SimranS224/personalsite/blob/master/src/content/SimranSinghResume.pdf" >Resume</a></Button> */}

            <SocialIcon rel="noopener noreferrer" target="_blank" url="https://github.com/SimranS224" />
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
          <h2>Additional Info:</h2>
          <hr/>
            <h2>Education</h2>
            <Education
              startYear={2017}
              endYear={2021}
              school="University of Toronto"
              Description="Pursuing Computer Science Specialist with a focus in artificial intelligence, minor in statistics"
               />

                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Skills</h2>
              <Skills
                skill="Python"
                progress={90}
                />
                <Skills
                skill="Java"
                progress={90}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={80}
                  />
                  <Skills
                    skill="React"
                    progress={50}
                    />
                    <Skills
                      skill="MySQL"
                      progress={60}
                      />
                      <Skills
                      skill="Firebase"
                      progress={60}
                      />
          </Cell>
        </Grid>
        </div>
    )
  }
}
export default Contact;
