import React from 'react';
import Header from  './components/header/header';
import About from './components/about/about';
import LittleCards from './components/littleCards/littleCards';
import Form from './components/form/form';
import './App.css';

export default class App extends React.Component {

  state = {
    query: {
      username: '',
      id: '',
    },
  }

  getQuery = (name, bnetId) => {
    this.setState({
      query: {
        username: name,
        id: bnetId,
      }
    })

    console.log(this.state);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Form getQuery={this.getQuery} />
        <LittleCards username={this.state.query.username}
        id={this.state.query.id} />
      </div>
    );
  }
}
