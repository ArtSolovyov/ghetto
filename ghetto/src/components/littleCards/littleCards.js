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

  getStats = (uName, battleTag) => {
    let request = fetch('https://owapi.io/stats/pc/us/' + uName + '-' + battleTag)
    .then(item => item.json()
    .then(item => {
      this.setState({ 
        statistics: {
          username: item.username,
          level: item.level,
          wins: +item.stats.game.competitive[2].value + item.stats.game.quickplay[2].value,
          loses: +item.stats.game.competitive[0].value + item.stats.game.quickplay[0].value,
          bestHero: item.stats.top_heroes.quickplay.games_won[0].hero,
          dealedDmg: item.stats.combat.quickplay[0].value,
          healCount: item.stats.assists.quickplay[1].value,
        }
      });
      console.log(item);
    }));
  }
  

  componentDidMount() {
    this.getStats('frst', '2873')
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  render() {

    const {name, level, wins, loses, bestHero, dealedDmg, healCount} = this.state.statistics;

    const toaster = () => {
      if (this.state.statistics.username === 'pending...') {
        return(
          <Spinner />
        )
      } else {
        return(
          <>
          <ToastBody>
                Уровень: <b>{level}</b>
              </ToastBody>
              <ToastBody>
                Соотношение побед к поражениям: <b>{wins} / {loses}</b>
              </ToastBody>
              <ToastBody>
              Лучший герой: <b>{bestHero}</b>
              </ToastBody>
              <ToastBody>
                Всего нанесено урона: <b>{dealedDmg}</b>
              </ToastBody>
              <ToastBody>
                Всего восстановлено здоровья: <b>{healCount}</b>
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
                Игрок: <b>{name}</b>
              </ToastHeader>
              {toaster}
            </Toast>
          </div>
        </div>
      );
  }
    
};