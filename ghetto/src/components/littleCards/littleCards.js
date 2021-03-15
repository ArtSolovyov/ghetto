import React from 'react';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';
import Spinner from '../spinner/spinner';

export default class LittleCards extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      statistics: {
        username: this.props.data.username,
        level: this.props.data.level,
        wins: this.props.data.stats.game.competitive[2].value + this.props.data.stats.game.quickplay[2].value,
        loses: this.props.data.stats.game.competitive[0].value + this.props.data.stats.game.quickplay[0].value,
        bestHero: this.props.data.stats.top_heroes.quickplay.games_won[0].hero,
        dealedDmg: this.props.data.stats.combat.quickplay[0].value,
        healCount: this.props.data.stats.assists.quickplay[1].value,
        heroImg: this.props.data.stats.top_heroes.quickplay.games_won[0].img,
        portrait: this.props.data.portrait,
      }
    }
  }


  // changeState = (data) => {
  //   this.setState({ 
  //     statistics: {
  //       username: data.username,
  //       level: data.level,
  //       wins: data.stats.game.competitive[2].value + data.stats.game.quickplay[2].value,
  //       loses: data.stats.game.competitive[0].value + data.stats.game.quickplay[0].value,
  //       bestHero: data.stats.top_heroes.quickplay.games_won[0].hero,
  //       dealedDmg: data.stats.combat.quickplay[0].value,
  //       healCount: data.stats.assists.quickplay[1].value,
  //       heroImg: data.stats.top_heroes.quickplay.games_won[0].img,
  //       portrait: data.portrait,
  //     }
  //   });
  // }

  // componentDidMount() {
  //   if (this.props.data.username) {
  //     this.changeState(this.props.data);
  //   }
  // }

  

  render() {

    const {username, level, wins, loses, bestHero, dealedDmg, healCount, heroImg, portrait} = this.state.statistics;

    const toaster = () => {
      if (this.state.statistics.username === 'Загрузка...') {
        return(
          <Spinner />
        )
      } else {
        return(
          <div>
              <div className='heroImg'><img src={heroImg} style={{borderRadius: '100px'}} alt='pending'></img></div>
              <ToastBody>
                Уровень: <span><b>{level}</b></span>
              </ToastBody>
              <ToastBody>
                Соотношение побед к поражениям: <span><b>{wins} / {loses}</b></span>
              </ToastBody>
              <ToastBody>
              Лучший герой: <span><b>{bestHero}</b></span>
              </ToastBody>
              <ToastBody>
                Всего нанесено урона: <span><b>{dealedDmg}</b></span>
              </ToastBody>
              <ToastBody>
                Всего восстановлено здоровья: <span><b>{healCount}</b></span>
              </ToastBody>
          </div>
        )
      }
    }

    return (
        <div>
          <div className="p-3 my-2 rounded">
            <Toast>
            <img src={portrait} style={{height: "30px", float: 'right'}} alt=''></img>
              <ToastHeader>
              
                Игрок: <b>{username}</b>
              </ToastHeader>
              {toaster()}
            </Toast>
          </div>
        </div>
      );
  }
    
};