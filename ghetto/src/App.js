import React from 'react';
import Header from  './components/header/header';
import About from './components/about/about';
import LittleCards from './components/littleCards/littleCards';
import Form from './components/form/form';
import './App.css';

export default class App extends React.Component {

  state = {
    data: {},
  }

  getQuery = (data) => {
    this.setState({
      data: data,
    })

    console.log(this.state);
  }

  render() {

    const {data} = this.state;

    return (
      <div className="App">
        <Header />
        <Form getData={this.getQuery}/>
        <LittleCards data={data}/>
        <About />
      </div>
    );
  }
}
