import React from 'react';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';
import Spinner from '../spinner/spinner';


export default class LittleCards extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      statistics: {
        username: 'pending...',
        level: 'pending...',
        wins: 'pending...',
        loses: 'pending...',
        bestHero: 'pending...',
        dealedDmg: 'pending...',
        healCount: 'pending...',
      },
    }
  }

  getStats = () => {
    fetch('https://owapi.io/stats/pc/us/frst-2873')
    .then(item => item.json())
    .then(item => {
      this.setState({ 
        statistics: {
          username: item.username,
          level: item.level,
          wins: item.stats.game.competitive[2].value + item.stats.game.quickplay[2].value,
          loses: item.stats.game.competitive[0].value + item.stats.game.quickplay[0].value,
          bestHero: item.stats.top_heroes.quickplay.games_won[0].hero,
          dealedDmg: item.stats.combat.quickplay[0].value,
          healCount: item.stats.assists.quickplay[1].value,
        }
      });
      console.log(item);
    });
  }
  

  componentDidMount() {
    this.getStats();
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  render() {

    const {username, level, wins, loses, bestHero, dealedDmg, healCount} = this.state.statistics;

    const toaster = () => {
      if (this.state.statistics.username === 'pending...') {
        return(
          <Spinner />
        )
      } else {
        return(
          <>
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
          </>
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