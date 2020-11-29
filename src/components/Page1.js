import React from 'react'
import { images } from '../shared'

function Page1(props) {
  const { match, renderMainBets, renderBets } = props

  return (
    <div className="all-content">
      <section className="selected-teams">
        <div className="container">
          <div className="selected-teams__inner">
            <div className="match-title">
              <h2 className="match-title__name">{match.event.name || 'Null'}</h2>
              <p className="match-title__stage">{match.additionalInfo || 'Null'}</p>
            </div>
            <div className="selected-teams__first-team">
              <div className="first-team__player">
                <img src={match.player1.image || ''} alt="" className="first-team__player-img"/>
              </div>
              <div className="first-team__team">
                <div className="first-team__logo">
                  <img className="first-team__logo-img"
                       style={{width: '50px'}}
                       src={match.team1.logo || ''} alt=""/>
                </div>
                <div className="first-team__description">
                  <h3 className="first-team__name">
                    {match.team1.name || 'Null'}
                  </h3>
                  <p className="first-team__country">{match.team1.location || ''}</p>
                </div>
              </div>
            </div>

            <div className="selected-teams__second-team">
              <div className="second-team__player">
                <img src={match.player2.image || ''} alt="" className="second-team__player-img"/>
              </div>
              <div className="second-team__team">
                <div className="second-team__description">
                  <h3 className="second-team__name">
                    {match.team2.name || 'Null'}
                  </h3>
                  <p className="second-team__country">{match.team2.location || ''}</p>
                </div>
                <div className="second-team__logo">
                  <img className="second-team__logo-img"
                       style={{width: '50px'}}
                       src={match.team2.logo || ''} alt=""/>
                </div>
              </div>
            </div>

            <div className="selected-teams__versus">
              VS
            </div>
          </div>
        </div>
      </section>

      <section className="main-bet">
        <div className="container">
          <div className="main-bet__inner">
            {renderMainBets}
          </div>
        </div>
      </section>

      <section className="bet-from-admin">
        <div className="container">
          <div className="bet-from-admin__inner">
            <div className="bet-from-admin__title">Handicap</div>
            <div className="bet-from-admin__bets">
              {renderBets}
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Page1
