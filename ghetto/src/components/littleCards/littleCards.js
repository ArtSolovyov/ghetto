import React from 'react';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';
import OverwatchService from '../overwatchService/overwatchService';



export default class LittleCards extends React.Component {
  

  state = {
        name: 'Pending',
        lvl: 'Pending',
    }

  getPlayerStats = ( nick, id ) => {
      const request = new OverwatchService;
      request.getPlayerStats( nick, id );
    }

  updateData = () => {
    this.getPlayerStats('frst', '2873').then( data =>
      this.setState((data) => ({
        name: data.name,
        lvl: data.lvl,
      })
    ));
  }
  
  render() {

    return (
        <div>
          <div className="p-3 my-2 rounded">
            <Toast>
              <ToastHeader>
                Name is {this.state.name}
              </ToastHeader>
              <ToastBody>
                Your level is {this.state.lvl}
              </ToastBody>
              <ToastBody>
                Your level is {this.state.lvl}
              </ToastBody>
              <ToastBody>
                Your level is {this.state.lvl}
              </ToastBody>
              <ToastBody>
                Your level is {this.state.lvl}
              </ToastBody>
              <ToastBody>
                Your level is {this.state.lvl}
              </ToastBody>
            </Toast>
          </div>
        </div>
      );
  }
    
};