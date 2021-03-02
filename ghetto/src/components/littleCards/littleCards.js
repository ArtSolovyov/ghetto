import React from 'react';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';
import GetName from '../overwatchService/overwatchService';

let api = new GetName;

const getName = api('frst', '2873');
const name = getName.username;
const lvl = getName.level;

const result = ''

export default class LittleCards extends React.Component() {
  

    state: {
        name: 'Pending',
        lvl: 'Pending',
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
            </Toast>
          </div>
        </div>
      );
  }
    
};