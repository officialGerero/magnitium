import React from 'react'
import { HLTV_URL, socket, superFetch } from '../utils'
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'

class VideoOverlay extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      navbar: [
        { id: 0, name: 'Bet', component: Page1 },
        { id: 1, name: 'Tournament', component: Page2 },
        { id: 2, name: 'Statistics', component: Page3},
      ],
      currentPage: 0,
      match: {},
      bets: [
        { id: 0, title: 'Natus Vincere W', flag: 'main', selected: false },
        { id: 1, title: 'Draw', flag: 'main', selected: false },
        { id: 2, title: 'Vitality', flag: 'main', selected: false },
        { id: 3, title: 'Natus', selected: false },
        { id: 4, title: 'Vincere', selected: false },
        { id: 5, title: 'Leader', selected: false },
        { id: 6, title: 'Sharlotka', selected: false },
        { id: 7, title: 'Sharlotka', selected: false }
      ]
    }
  }

  async fetchMatch(id) {
    if (id !== 0) {
      const match = await superFetch(`${HLTV_URL}/getMatch/${id}`)

      console.log('Receive id', id)
      console.log('Match', match)

      match.team1 = await superFetch(`${HLTV_URL}/getTeam/${match.team1.id}`)
      match.team2 = await superFetch(`${HLTV_URL}/getTeam/${match.team2.id}`)
      match.player1 = await superFetch(`${HLTV_URL}/getPlayer/${match.players.team1[2].id}`)
      match.player2 = await superFetch(`${HLTV_URL}/getPlayer/${match.players.team2[2].id}`)
      match.stats = await superFetch(`${HLTV_URL}/getEvent/${match.event.id}`)

      this.setState({
        match, bets: [
          { id: 0, title: match.team1.name, flag: 'main', selected: false },
          { id: 1, title: 'Draw', flag: 'main', selected: false },
          { id: 2, title: match.team2.name, flag: 'main', selected: false },
          { id: 3, title: `${match.team1.name} (+1.5)`, selected: false },
          { id: 4, title: `${match.team1.name} (-1.5)`, selected: false },
          { id: 5, title: `${match.team2.name} (+1.5)`, selected: false },
          { id: 6, title: `${match.team2.name} (-1.5)`, selected: false },
        ]
      })

    } else console.log('Match id is 0')
  }

  componentDidMount() {
    socket.on('send_config', config => {
      this.fetchMatch(config.matchId)
    })
  }

  render() {
    const selectBets = (id) => this.setState({
      bets: this.state.bets.map(item => {
        item.selected = item.id === id
        return item
      })
    })

    const renderMainBets = this.state.bets.map(item => item.flag === 'main' &&
      <div
        key={item.id + Date.now}
        className={[ 'bet__item', item.selected && 'active' ].join(' ')}
        onClick={selectBets.bind(this, item.id)}
      >
        {item.title}
      </div>
    )

    const renderBets = this.state.bets.map(item => item.flag !== 'main' &&
      <div
        key={item.id + Date.now}
        className={[ 'bet__item', item.selected && 'active' ].join(' ')}
        onClick={selectBets.bind(this, item.id)}
      >
        {item.title}
      </div>
    )

    const renderHavbar = this.state.navbar.map(item => {
      return (
        <li className="menu__list-item"
            key={item.id}
            onClick={() => this.setState({ currentPage: item.id })}
        >
          <a href="#"
             className={[ 'menu__link', item.id === this.state.currentPage && 'active' ].join(' ')}
          >{item.name}</a>
        </li>
      )
    })

    const match = this.state.match
    if (match.error) console.log(match.error)

    if (!match || !match.id) return <h1 style={{ color: '#fff', fontSize: '24px', margin: '10px' }}>Loading...</h1>
    if (match.id === 0) return <h1 style={{ color: '#fff', fontSize: '24px', margin: '10px' }}>Match is not
      selected...</h1>

    console.log(match)

    return (
      <React.Fragment>
        <header className="header">
          <div className="container">
            <div className="header__inner">
              <nav className="menu">
                <ul className="menu__list">
                  {renderHavbar}
                </ul>
              </nav>
            </div>
          </div>
        </header>

        <div className="scroll-container"
             style={{
               height: '100%',
               overflowY: 'scroll'
             }}
        >
          {this.state.currentPage === 0 &&
          <Page1 match={match} renderMainBets={renderMainBets} renderBets={renderBets}/>}
          {this.state.currentPage === 1 && <Page2 match={match}/>}
          {this.state.currentPage === 2 && <Page3/>}
        </div>
      </React.Fragment>
    )
  }
}

export default VideoOverlay
