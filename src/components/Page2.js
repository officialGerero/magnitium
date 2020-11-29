import React from 'react'
import { images } from '../shared'

function Page2(props) {
  const {match} = props

  return (
    <div className="all-content">
      <div className="container">
        <h1 className="tournament-name">{match.event.name}</h1>
        <div className="overall-statistics">
          <div className="overall-statistics__wrapper">

            <div className="overal-statistics__left-items">
              <div className="overall-statistics__item">
                <div className="left-item__icon">
                  <img src={images.calendar} alt="" className="item__icon-img left"/>
                </div>
                <div className="left-item__text">
                  <h5 className="item__text-title">Date:</h5>
                  <p className="item__text-value">{new Date(match.stats.dateStart).toDateString()} - {new Date(match.stats.dateEnd).toDateString()}</p>
                </div>
              </div>

              <div className="overall-statistics__item">
                <div className="left-item__icon">
                  <img src={images.location} alt="" className="item__icon-img left"/>
                </div>
                <div className="left-item__text">
                  <h5 className="item__text-title">Location:</h5>
                  <p className="item__text-value">{match.stats.location.name}</p>
                </div>
              </div>
            </div>

            <div className="overal-statistics__right-items">
              <div className="overall-statistics__item">
                <div className="right-item__text">
                  <h5 className="item__text-title">Teams</h5>
                  <p className="item__text-value">{match.stats.teams.length}</p>
                </div>
                <div className="right-item__icon">
                  <img src={images.teams} alt="" className="item__icon-img"/>
                </div>
              </div>

              <div className="overall-statistics__item">
                <div className="right-item__text">
                  <h5 className="item__text-title">Prize pool</h5>
                  <p className="item__text-value">{match.stats.prizePool}</p>
                </div>
                <div className="right-item__icon">
                  <img src={images.money} alt="" className="item__icon-img"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="point-tables">
        <div className="point-tables__wrapper">
          <div className="point-tables__item">
            <div className="point-tables__header">
              <div className="subtitle">Group A</div>
              <div className="point-tables__parameters">
                <div className="point-tables__param">G</div>
                <div className="point-tables__param">P</div>
              </div>
            </div>

            <div className="point-tables__table">
              <div className="point-tables__team">
                <div className="team__name">
                  <div className="points-tables__logo-team">
                    <img src={images.miniTeam} alt="" className="icon__team"/>
                  </div>
                  <div className="points-tables__name-team">Natus Vincere</div>
                </div>
                <div className="point-tables__parameters">
                  <div className="team__param-games">5</div>
                  <div className="team__param-pts">11</div>
                </div>
              </div>

              <div className="point-tables__team">
                <div className="team__name">
                  <div className="points-tables__logo-team">
                    <img src={images.miniTeam2} alt="" className="icon__team"/>
                  </div>
                  <div className="points-tables__name-team">Vitality</div>
                </div>
                <div className="point-tables__parameters">
                  <div className="team__param-games">5</div>
                  <div className="team__param-pts">11</div>
                </div>
              </div>

              <div className="point-tables__team">
                <div className="team__name">
                  <div className="points-tables__logo-team">
                    <img src={images.miniTeam3} alt="" className="icon__team"/>
                  </div>
                  <div className="points-tables__name-team">Astralis</div>
                </div>
                <div className="point-tables__parameters">
                  <div className="team__param-games">5</div>
                  <div className="team__param-pts">11</div>
                </div>
              </div>

              <div className="point-tables__team">
                <div className="team__name">
                  <div className="points-tables__logo-team">
                    <img src={images.miniTeam4} alt="" className="icon__team"/>
                  </div>
                  <div className="points-tables__name-team">Heroic</div>
                </div>
                <div className="point-tables__parameters">
                  <div className="team__param-games">5</div>
                  <div className="team__param-pts">11</div>
                </div>
              </div>
            </div>
          </div>

          <div className="point-tables__item">
            <div className="point-tables__header">
              <div className="subtitle">Group B</div>
              <div className="point-tables__parameters">
                <div className="point-tables__param">G</div>
                <div className="point-tables__param">P</div>
              </div>
            </div>

            <div className="point-tables__table">
              <div className="point-tables__team">
                <div className="team__name">
                  <div className="points-tables__logo-team">
                    <img src={images.miniTeam} alt="" className="icon__team"/>
                  </div>
                  <div className="points-tables__name-team">Natus Vincere</div>
                </div>
                <div className="point-tables__parameters">
                  <div className="team__param-games">5</div>
                  <div className="team__param-pts">11</div>
                </div>
              </div>

              <div className="point-tables__team">
                <div className="team__name">
                  <div className="points-tables__logo-team">
                    <img src={images.miniTeam2} alt="" className="icon__team"/>
                  </div>
                  <div className="points-tables__name-team">Vitality</div>
                </div>
                <div className="point-tables__parameters">
                  <div className="team__param-games">5</div>
                  <div className="team__param-pts">11</div>
                </div>
              </div>

              <div className="point-tables__team">
                <div className="team__name">
                  <div className="points-tables__logo-team">
                    <img src={images.miniTeam3} alt="" className="icon__team"/>
                  </div>
                  <div className="points-tables__name-team">Astralis</div>
                </div>
                <div className="point-tables__parameters">
                  <div className="team__param-games">5</div>
                  <div className="team__param-pts">11</div>
                </div>
              </div>

              <div className="point-tables__team">
                <div className="team__name">
                  <div className="points-tables__logo-team">
                    <img src={images.miniTeam4} alt="" className="icon__team"/>
                  </div>
                  <div className="points-tables__name-team">Heroic</div>
                </div>
                <div className="point-tables__parameters">
                  <div className="team__param-games">5</div>
                  <div className="team__param-pts">11</div>
                </div>
              </div>
            </div>
          </div>

          <div className="point-tables__item">
            <div className="point-tables__header">
              <div className="subtitle">Group A</div>
              <div className="point-tables__parameters">
                <div className="point-tables__param">G</div>
                <div className="point-tables__param">P</div>
              </div>
            </div>

            <div className="point-tables__table">
              <div className="point-tables__team">
                <div className="team__name">
                  <div className="points-tables__logo-team">
                    <img src={images.miniTeam} alt="" className="icon__team"/>
                  </div>
                  <div className="points-tables__name-team">Natus Vincere</div>
                </div>
                <div className="point-tables__parameters">
                  <div className="team__param-games">5</div>
                  <div className="team__param-pts">11</div>
                </div>
              </div>

              <div className="point-tables__team">
                <div className="team__name">
                  <div className="points-tables__logo-team">
                    <img src={images.miniTeam2} alt="" className="icon__team"/>
                  </div>
                  <div className="points-tables__name-team">Vitality</div>
                </div>
                <div className="point-tables__parameters">
                  <div className="team__param-games">5</div>
                  <div className="team__param-pts">11</div>
                </div>
              </div>

              <div className="point-tables__team">
                <div className="team__name">
                  <div className="points-tables__logo-team">
                    <img src={images.miniTeam3} alt="" className="icon__team"/>
                  </div>
                  <div className="points-tables__name-team">Astralis</div>
                </div>
                <div className="point-tables__parameters">
                  <div className="team__param-games">5</div>
                  <div className="team__param-pts">11</div>
                </div>
              </div>

              <div className="point-tables__team">
                <div className="team__name">
                  <div className="points-tables__logo-team">
                    <img src={images.miniTeam4} alt="" className="icon__team"/>
                  </div>
                  <div className="points-tables__name-team">Heroic</div>
                </div>
                <div className="point-tables__parameters">
                  <div className="team__param-games">5</div>
                  <div className="team__param-pts">11</div>
                </div>
              </div>
            </div>
          </div>

          <div className="point-tables__item">
            <div className="point-tables__header">
              <div className="subtitle">Group C</div>
              <div className="point-tables__parameters">
                <div className="point-tables__param">G</div>
                <div className="point-tables__param">P</div>
              </div>
            </div>

            <div className="point-tables__table">
              <div className="point-tables__team">
                <div className="team__name">
                  <div className="points-tables__logo-team">
                    <img src={images.miniTeam} alt="" className="icon__team"/>
                  </div>
                  <div className="points-tables__name-team">Natus Vincere</div>
                </div>
                <div className="point-tables__parameters">
                  <div className="team__param-games">5</div>
                  <div className="team__param-pts">11</div>
                </div>
              </div>

              <div className="point-tables__team">
                <div className="team__name">
                  <div className="points-tables__logo-team">
                    <img src={images.miniTeam2} alt="" className="icon__team"/>
                  </div>
                  <div className="points-tables__name-team">Vitality</div>
                </div>
                <div className="point-tables__parameters">
                  <div className="team__param-games">5</div>
                  <div className="team__param-pts">11</div>
                </div>
              </div>

              <div className="point-tables__team">
                <div className="team__name">
                  <div className="points-tables__logo-team">
                    <img src={images.miniTeam3} alt="" className="icon__team"/>
                  </div>
                  <div className="points-tables__name-team">Astralis</div>
                </div>
                <div className="point-tables__parameters">
                  <div className="team__param-games">5</div>
                  <div className="team__param-pts">11</div>
                </div>
              </div>

              <div className="point-tables__team">
                <div className="team__name">
                  <div className="points-tables__logo-team">
                    <img src={images.miniTeam4} alt="" className="icon__team"/>
                  </div>
                  <div className="points-tables__name-team">Heroic</div>
                </div>
                <div className="point-tables__parameters">
                  <div className="team__param-games">5</div>
                  <div className="team__param-pts">11</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="basket-scheme">
        <div className="container">
          <div className="basket-scheme__wrapper">
            <div className="column-1">
              <div className="basket__match match-1">
                <div className="basket__match-team">
                  <div className="match-team__name">
                    <img src={images.miniTeam} alt="" className="match-team__logo"/>
                    <p className="match-team__title">Natus Vincere</p>
                  </div>
                  <div className="match-team__points">
                    2
                  </div>
                </div>
                <div className="basket__match-team lose">
                  <div className="match-team__name">
                    <img src={images.miniTeam2} alt="" className="match-team__logo"/>
                    <p className="match-team__title">Natus Vincere</p>
                  </div>
                  <div className="match-team__points">
                    2
                  </div>
                </div>
              </div>
              <div className="basket__match match-2">
                <div className="basket__match match-2">
                  <div className="basket__match-team">
                    <div className="match-team__name">
                      <img src={images.miniTeam3} alt="" className="match-team__logo"/>
                      <p className="match-team__title">Natus Vincere</p>
                    </div>
                    <div className="match-team__points">
                      2
                    </div>
                  </div>
                  <div className="basket__match-team lose">
                    <div className="match-team__name">
                      <img src={images.miniTeam4} alt="" className="match-team__logo"/>
                      <p className="match-team__title">Natus Vincere</p>
                    </div>
                    <div className="match-team__points">
                      2
                    </div>
                  </div>
                </div>
              </div>
              <div className="basket__match match-3">
                <div className="basket__match match-3">
                  <div className="basket__match-team">
                    <div className="match-team__name">
                      <img src={images.miniTeam2} alt="" className="match-team__logo"/>
                      <p className="match-team__title">Natus Vincere</p>
                    </div>
                    <div className="match-team__points">
                      2
                    </div>
                  </div>
                  <div className="basket__match-team lose">
                    <div className="match-team__name">
                      <img src={images.miniTeam} alt="" className="match-team__logo"/>
                      <p className="match-team__title">Natus Vincere</p>
                    </div>
                    <div className="match-team__points">
                      2
                    </div>
                  </div>
                </div>
              </div>
              <div className="basket__match match-4">
                <div className="basket__match match-4">
                  <div className="basket__match-team">
                    <div className="match-team__name">
                      <img src={images.miniTeam4} alt="" className="match-team__logo"/>
                      <p className="match-team__title">Natus Vincere</p>
                    </div>
                    <div className="match-team__points">
                      2
                    </div>
                  </div>
                  <div className="basket__match-team lose">
                    <div className="match-team__name">
                      <img src={images.miniTeam3} alt="" className="match-team__logo"/>
                      <p className="match-team__title">Natus Vincere</p>
                    </div>
                    <div className="match-team__points">
                      2
                    </div>
                  </div>
                </div>
              </div>
              <div className="basket__match match-5">
                <div className="basket__match match-5">
                  <div className="basket__match-team">
                    <div className="match-team__name">
                      <img src={images.miniTeam} alt="" className="match-team__logo"/>
                      <p className="match-team__title">Natus Vincere</p>
                    </div>
                    <div className="match-team__points">
                      2
                    </div>
                  </div>
                  <div className="basket__match-team lose">
                    <div className="match-team__name">
                      <img src={images.miniTeam2} alt="" className="match-team__logo"/>
                      <p className="match-team__title">Natus Vincere</p>
                    </div>
                    <div className="match-team__points">
                      2
                    </div>
                  </div>
                </div>
              </div>
              <div className="basket__match match-6">
                <div className="basket__match match-6">
                  <div className="basket__match-team">
                    <div className="match-team__name">
                      <img src={images.miniTeam3} alt="" className="match-team__logo"/>
                      <p className="match-team__title">Natus Vincere</p>
                    </div>
                    <div className="match-team__points">
                      2
                    </div>
                  </div>
                  <div className="basket__match-team lose">
                    <div className="match-team__name">
                      <img src={images.miniTeam4} alt="" className="match-team__logo"/>
                      <p className="match-team__title">Natus Vincere</p>
                    </div>
                    <div className="match-team__points">
                      2
                    </div>
                  </div>
                </div>
              </div>
              <div className="basket__match match-7">
                <div className="basket__match match-7">
                  <div className="basket__match-team">
                    <div className="match-team__name">
                      <img src={images.miniTeam2} alt="" className="match-team__logo"/>
                      <p className="match-team__title">Natus Vincere</p>
                    </div>
                    <div className="match-team__points">
                      2
                    </div>
                  </div>
                  <div className="basket__match-team lose">
                    <div className="match-team__name">
                      <img src={images.miniTeam} alt="" className="match-team__logo"/>
                      <p className="match-team__title">Natus Vincere</p>
                    </div>
                    <div className="match-team__points">
                      2
                    </div>
                  </div>
                </div>
              </div>
              <div className="basket__match match-8">
                <div className="basket__match match-8">
                  <div className="basket__match-team">
                    <div className="match-team__name">
                      <img src={images.miniTeam4} alt="" className="match-team__logo"/>
                      <p className="match-team__title">Natus Vincere</p>
                    </div>
                    <div className="match-team__points">
                      2
                    </div>
                  </div>
                  <div className="basket__match-team lose">
                    <div className="match-team__name">
                      <img src={images.miniTeam3} alt="" className="match-team__logo"/>
                      <p className="match-team__title">Natus Vincere</p>
                    </div>
                    <div className="match-team__points">
                      2
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column-2">
              <div className="basket__match match-1">
                <div className="basket__match-team">
                  <div className="match-team__name">
                    <img src={images.miniTeam} alt="" className="match-team__logo"/>
                    <p className="match-team__title">Natus Vincere</p>
                  </div>
                  <div className="match-team__points">
                    2
                  </div>
                </div>
                <div className="basket__match-team lose">
                  <div className="match-team__name">
                    <img src={images.miniTeam3} alt="" className="match-team__logo"/>
                    <p className="match-team__title">Natus Vincere</p>
                  </div>
                  <div className="match-team__points">
                    2
                  </div>
                </div>
              </div>
              <div className="basket__match match-2">
                <div className="basket__match-team">
                  <div className="match-team__name">
                    <img src={images.miniTeam2} alt="" className="match-team__logo"/>
                    <p className="match-team__title">Natus Vincere</p>
                  </div>
                  <div className="match-team__points">
                    2
                  </div>
                </div>
                <div className="basket__match-team lose">
                  <div className="match-team__name">
                    <img src={images.miniTeam4} alt="" className="match-team__logo"/>
                    <p className="match-team__title">Natus Vincere</p>
                  </div>
                  <div className="match-team__points">
                    2
                  </div>
                </div>
              </div>
              <div className="basket__match match-3">
                <div className="basket__match-team">
                  <div className="match-team__name">
                    <img src={images.miniTeam2} alt="" className="match-team__logo"/>
                    <p className="match-team__title">Natus Vincere</p>
                  </div>
                  <div className="match-team__points">
                    2
                  </div>
                </div>
                <div className="basket__match-team lose">
                  <div className="match-team__name">
                    <img src={images.miniTeam} alt="" className="match-team__logo"/>
                    <p className="match-team__title">Natus Vincere</p>
                  </div>
                  <div className="match-team__points">
                    2
                  </div>
                </div>
              </div>
              <div className="basket__match match-4">
                <div className="basket__match-team">
                  <div className="match-team__name">
                    <img src={images.miniTeam4} alt="" className="match-team__logo"/>
                    <p className="match-team__title">Natus Vincere</p>
                  </div>
                  <div className="match-team__points">
                    2
                  </div>
                </div>
                <div className="basket__match-team lose">
                  <div className="match-team__name">
                    <img src={images.miniTeam3} alt="" className="match-team__logo"/>
                    <p className="match-team__title">Natus Vincere</p>
                  </div>
                  <div className="match-team__points">
                    2
                  </div>
                </div>
              </div>
            </div>
            <div className="column-3">
              <div className="basket__match match-1">
                <div className="basket__match-team">
                  <div className="match-team__name">
                    <img src={images.miniTeam} alt="" className="match-team__logo"/>
                    <p className="match-team__title">Natus Vincere</p>
                  </div>
                  <div className="match-team__points">
                    2
                  </div>
                </div>
                <div className="basket__match-team lose">
                  <div className="match-team__name">
                    <img src={images.miniTeam2} alt="" className="match-team__logo"/>
                    <p className="match-team__title">Natus Vincere</p>
                  </div>
                  <div className="match-team__points">
                    2
                  </div>
                </div>
              </div>
              <div className="basket__match match-1">
                <div className="basket__match-team">
                  <div className="match-team__name">
                    <img src={images.miniTeam2} alt="" className="match-team__logo"/>
                    <p className="match-team__title">Natus Vincere</p>
                  </div>
                  <div className="match-team__points">
                    2
                  </div>
                </div>
                <div className="basket__match-team lose">
                  <div className="match-team__name">
                    <img src={images.miniTeam4} alt="" className="match-team__logo"/>
                    <p className="match-team__title">Natus Vincere</p>
                  </div>
                  <div className="match-team__points">
                    2
                  </div>
                </div>
              </div>
            </div>
            <div className="column-4">
              <div className="basket__match match-1">
                <div className="basket__match-team winner">
                  <div className="match-team__name">
                    <img src={images.miniTeam} alt="" className="match-team__logo"/>
                    <p className="match-team__title">Natus Vincere</p>
                  </div>
                  <div className="match-team__points">
                    2
                  </div>
                </div>
                <div className="basket__match-team lose">
                  <div className="match-team__name">
                    <img src={images.miniTeam2} alt="" className="match-team__logo"/>
                    <p className="match-team__title">Natus Vincere</p>
                  </div>
                  <div className="match-team__points">
                    2
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page2
