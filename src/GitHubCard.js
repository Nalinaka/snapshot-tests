import React from "react"
import Card from "react-bootstrap/Card"
import Nalini from './Nalini.png'

function GitHubCard() {
    return (
        <div className="card">
          <Card style={{ width: "18rem"}}>
          <Nalini Krishan a full stack developer at San Diego State University/>
          <Card.Img variant="top" src={NaliniKrishanGithubprofile} />
          {Source='https://github.com/Nalinaka'}
          <Card.Body>
              <Card.Title>Nalini Krishan GitHub</Card.Title>
              <Card.Text>
              I am a full stack developer. 
              </Card.Text>
          </Card.Body>
          </Card>
        </div>
    );
  }
  
  export default GitHubCard;
  