import React from 'react';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';
import OverwatchService from '../overwatchService/overwatchService';



export default class LittleCards extends React.Component {
  

    state: {
        name: 'Pending',
        lvl: 'Pending',
    }

    getResourse = async () => {
      let x;
      const request = new OverwatchService;
      request.getResourse('frst', '2873');
    }

    componentDidMount() {
      this.getResourse();
    }

  
  render() {
    return (
        <div>
          <div className="p-3 my-2 rounded">
            <Toast>
              <ToastHeader>
                Name is
              </ToastHeader>
              <ToastBody>
                Your level is
              </ToastBody>
            </Toast>
          </div>
        </div>
      );
  }
    
};