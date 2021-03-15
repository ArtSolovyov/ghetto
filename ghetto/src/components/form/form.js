import React from 'react';
import {Input} from 'reactstrap';
import Mag from '../../images/mag.png';
import Api from '../api/api';



const Form = (props) => {
    
    let getValues = async () => {
        const username = document.querySelector('.nameInput').value;
        const id = document.querySelector('.idInput').value;
        let data = {};
        if (id && username) {
            try {
                data = await Api(username, id);
                props.getData(data);
            } catch {
                alert('чото случилось с запросом');
            }
        }
    }

    return (
        <div className="playerForm" style={{width: '361px'}}>
        <Input className='nameInput' placeholder="Никнейм" style={{width: '176px', margin: '1.5rem 0rem 0rem 1rem', display: 'inline-block'}} />
        <Input className='idInput' placeholder="Battle.net ID" style={{width: '115px', margin: '1.5rem 1rem 0rem 0.5rem', display: 'inline-block'}} />
        <img src={Mag} onClick={() => getValues()} alt='search' className='submitQuery' style={{height: '30px'}}></img>
        </div>
    )
}

export default Form;