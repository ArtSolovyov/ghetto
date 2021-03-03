import React from 'react';

export default class OverwatchService extends React.Component {

    getResourse = async (uName, battleTag) => {
        const request =  await fetch('https://owapi.io/stats/pc/us/' + uName + '-' + battleTag)
         .then(item => item.json()).then(item => console.log(item));
     }

}