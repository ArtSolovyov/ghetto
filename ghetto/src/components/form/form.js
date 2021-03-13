import React from 'react';
import {Input} from 'reactstrap';
import Mag from '../../images/mag.png';

const Form = (props) => {


    let getValues = () => {
        const username = document.querySelector('.nameInput').value;
        const id = document.querySelector('.idInput').value;
        if (id && username) {
            props.getQuery(username, id);
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