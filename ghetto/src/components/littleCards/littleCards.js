import React from 'react';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';
import OverwatchService from '../overwatchService/overwatchService';

export default class LittleCards extends React.Component {
  
  state = {
        name: null,
        lvl: null,
    }

  updateData = ( nick, id ) => {

    const request = new OverwatchService;
    request.getPlayerStats( nick, id ).then( item => {
      // this.setState({
      //   name: data.username,
      //   lvl: data.level,
      //  })
      console.log(item);
    })

  }
  
  componentDidMount() {
    this.updateData('frst', '2873');
  }

  render() {
    const {name, lvl} = this.state;
    let nickname,
          level;

    if (name == null || lvl == null) {
      nickname = '*loading*';
      level = '*loading*';
    } else {
      nickname = name;
      level = lvl;
    }

    return (
        <div>
          <div className="p-3 my-2 rounded">
            <Toast>
              <ToastHeader>
                Name is {nickname}
              </ToastHeader>
              <ToastBody>
                Your level is {level}
              </ToastBody>
              <ToastBody>
                Your level is {level}
              </ToastBody>
              <ToastBody>
                Your level is {level}
              </ToastBody>
              <ToastBody>
                Your level is {level}
              </ToastBody>
              <ToastBody>
                Your level is {level}
              </ToastBody>
            </Toast>
          </div>
        </div>
      );
  }
    
};