import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import './about.css';
import OwLogo from '../../images/owlogo.png';

const About = (props) => {
  return (
    <div className="jumbotronWrapper">
      <Jumbotron>
        <img src={OwLogo} alt=""></img>
        <p className="lead" style={{fontSize: '15px'}}>https://github.com/ArtSolovyov/ghetto</p>
        <hr className="my-2" />
        <p>Овервочер v0.2</p>
        <p className="lead">
          <Button color="primary" href="tg://resolve?domain=arthursolo">Пиши мне в телеге</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default About;