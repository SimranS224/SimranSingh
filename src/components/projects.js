import React, { Component } from "react";
import { Chip, Grid, Cell, Card, Button, CardText, CardActions, CardTitle} from "react-mdl";
class Projects extends Component {
  render() {
    return (
      <div>
        <Grid className="demo-grid-1">
          <Cell col={4}>
            <Card shadow={0} style={{ width: '250px', margin: 'auto' }}>

              <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://i.imgur.com/xbeiqiv.png) center / cover' }}></CardTitle>
              <centre>
                <Chip width="30px" >Java Beans, Firebase</Chip></centre>
              <CardText>
                Android application with three games and central score board.
    </CardText>

              <CardActions border>
              <Button colored> <a href="https://github.com/SimranS224/GameCenter" rel="noopener noreferrer" target="_blank">See project</a></Button>
              </CardActions>
            </Card>

          </Cell>
          <Cell col={4}>
            <Card shadow={0} style={{ width: '250px', margin: 'auto' }}>
              <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://i.imgur.com/YM0QoFq.png) center / cover' }}></CardTitle>
              <centre>
                <Chip width="30px" >JS, HTML</Chip></centre>
              <CardText>
                Interactive Javascript game using path finding
    </CardText>
              <CardActions border>
              <Button colored> <a href="https://github.com/SimranS224/Arcade-Games/tree/master/PacmanAvoidance" rel="noopener noreferrer" target="_blank">See project</a></Button>

              </CardActions>

            </Card></Cell>
          <Cell col={4}>
            <Card shadow={0} style={{ width: '250px', margin: 'auto' }}>
              <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://i.imgur.com/k6OUhZe.jpg) center / cover' }}></CardTitle>
              <centre>
                <Chip width="30px" >C++, Arduino</Chip></centre>
              <CardText>
                Bluetooth Controlled RC Car
    </CardText>
              <CardActions border>
              <Button colored> <a href="https://github.com/SimranS224/Blutooth-RC-Car/tree/master/BlutoothControlledRC_Car" rel="noopener noreferrer" target="_blank">See project</a></Button>
              </CardActions>

            </Card>
          </Cell>
        </Grid>

        <Grid className="demo-grid-1">
          <Cell col={4}>
            <Card shadow={0} style={{ width: '250px', margin: 'auto' }}>
              <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://i.imgur.com/QBtuHTy.png) center / cover' }}></CardTitle>
              <centre>
                <Chip width="30px" >JS, HTML</Chip>
              </centre>
              <CardText>
                Score based game with varying difficulty.
    </CardText>
              <CardActions border>
              <Button colored> <a href="https://github.com/SimranS224/Arcade-Games/tree/master/BrickBreaker" rel="noopener noreferrer" target="_blank">See project</a></Button>

              </CardActions>

            </Card>

          </Cell>
          
          
        </Grid>

      </div>
    )
  }
}

export default Projects;