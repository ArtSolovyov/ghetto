import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import './about.css';

const About = (props) => {
  return (
    <div className="jumbotronWrapper">
      <Jumbotron>
        <h1 className="display-3">Привет!</h1>
        <p className="lead">Овервочер позволяет получить общую и частную статистику профиля игрока в Owerwatch.</p>
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