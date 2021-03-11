import React from 'react';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';
import Spinner from '../spinner/spinner';
import Api from '../api/api';

export default class LittleCards extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      statistics: {
        username: 'Загрузка...',
        level: 'Загрузка...',
        wins: 'Загрузка...',
        loses: 'Загрузка...',
        bestHero: 'Загрузка...',
        dealedDmg: 'Загрузка...',
        healCount: 'Загрузка...',
        heroImg: 'Загрузка...',
      },
    }
  }

  getStats = async () => {
    let data = await Api('frst', '2873');
    console.log(data);
    
    this.setState({ 
      statistics: {
        username: data.username,
        level: data.level,
        wins: data.stats.game.competitive[2].value + data.stats.game.quickplay[2].value,
        loses: data.stats.game.competitive[0].value + data.stats.game.quickplay[0].value,
        bestHero: data.stats.top_heroes.quickplay.games_won[0].hero,
        dealedDmg: data.stats.combat.quickplay[0].value,
        healCount: data.stats.assists.quickplay[1].value,
        heroImg: data.stats.top_heroes.quickplay.games_won[0].img,
      }
    });
  }

  componentDidMount() {
    this.getStats();
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  render() {

    const {username, level, wins, loses, bestHero, dealedDmg, healCount, heroImg} = this.state.statistics;

    const toaster = () => {
      if (this.state.statistics.username === 'Загрузка...') {
        return(
          <Spinner />
        )
      } else {
        return(
          <div>
              <div className='heroImg'><img src={heroImg} alt='pending'></img></div>
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