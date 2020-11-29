import React from 'react'
import {images} from '../shared'

function Page3() {
  return (
    <div className="all-content" style={{marginBottom: '100px'}}>
      <section className="map-pics">
        <div className="container">
          <div className="map-pics__wrapper">
            <div className="map-pics__content">
              <div className="map-pics__asside">
                <div className="title">
                  <h2 className="section-title">Maps picks</h2>
                </div>
                <div className="map-pics__pics">
                  <div className="pic__team first"><strong>Illuminar</strong> picked Inferno</div>
                  <div className="pic__team second"><strong>Nemiga</strong> Picked Nuke</div>
                  <div className="pic__team first"><strong>Illuminar</strong> removed Vertigo</div>
                  <div className="pic__team second"><strong>Nemiga</strong> removed Train</div>
                  <div className="pic__team first"><strong>Illuminar</strong> removed Overpass</div>
                  <div className="pic__team second"><strong>Nemiga</strong> removed Mirage</div>
                  <div className="pic__team left">Dust II was left over</div>
                </div>
              </div>
              <div className="map-pics__maps">
                <div className="map__container">
                  <img src={images.dust} alt="" className="map__img"/>
                  <h3 className="map__name">Dust II</h3>
                  <div className="map__stats">
                    <img src={images.logo1} alt="" className="map__stats-logo"/>
                    <div className="map__stats-text">
                      <div className="text__overall">Natus Vincere 19 - 4 Vitality</div>
                      <div className="text__scores">(7:8); (8:7); (4:0)</div>
                    </div>
                    <img src={images.logo2} alt="" className="map__stats-logo"/>
                  </div>
                </div>
                <div className="map__container">
                  <img src={images.inferno} alt="" className="map__img"/>
                  <h3 className="map__name">Nuke</h3>
                  <div className="map__stats second">
                    <img src={images.logo1} alt="" className="map__stats-logo"/>
                    <div className="map__stats-text ">
                      <div className="text__overall">Natus Vincere 19 - 4 Vitality</div>
                      <div className="text__scores">(7:8); (8:7); (4:0)</div>
                    </div>
                    <img src={images.logo2} alt="" className="map__stats-logo"/>
                  </div>
                </div>
                <div className="map__container">
                  <img src={images.nuke} alt="" className="map__img"/>
                  <h3 className="map__name">Inferno</h3>
                  <div className="map__stats third">
                    <img src={images.logo1} alt="" className="map__stats-logo"/>
                    <div className="map__stats-text ">
                      <div className="text__overall">Natus Vincere 19 - 4 Vitality</div>
                      <div className="text__scores">(7:8); (8:7); (4:0)</div>
                    </div>
                    <img src={images.logo2} alt="" className="map__stats-logo"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="lineup__header">
          <div className="lineup__team active">
            <div className="first-team__logo">
              <img className="first-team__logo-img" src={images.logo1} alt=""/>
            </div>
            <div className="first-team__description">
              <h3 className="first-team__name">
                Natus Vincere
              </h3>
              <p className="first-team__country">Ukraine</p>
            </div>
          </div>
          <div className="lineup__team">
            <div className="second-team__description">
              <h3 className="second-team__name">
                Natus Vincere
              </h3>
              <p className="second-team__country">Ukraine</p>
            </div>
            <div className="second-team__logo">
              <img className="second-team__logo-img" src={images.logo2} alt=""/>
            </div>
          </div>
          <div className="lineup__title">
            <h2 className="section-title">Lineups</h2>
          </div>
        </div>
      </div>
      <section className="lineups">
        <div className="lineups__wrapper">

          <div className="lineup__items">
            <div className="lineup__item">
              <img src={images.player1} alt="" className="lineup__img"/>
              <div className="lineup__item-data">
                <img src={images.ru} alt="" className="lineup__item-flag"/>
                <div className="lineup__item-name">Perfecto</div>
                <div className="lineup__item-coef">1.22</div>
              </div>
            </div>
            <div className="lineup__item">
              <img src={images.player2} alt="" className="lineup__img"/>
              <div className="lineup__item-data">
                <img src={images.ru} alt="" className="lineup__item-flag"/>
                <div className="lineup__item-name">Perfecto</div>
                <div className="lineup__item-coef">1.22</div>
              </div>
            </div>
            <div className="lineup__item">
              <img src={images.player3} alt="" className="lineup__img"/>
              <div className="lineup__item-data">
                <img src={images.ru} alt="" className="lineup__item-flag"></img>
                <div className="lineup__item-name">Perfecto</div>
                <div className="lineup__item-coef">1.22</div>
              </div>
            </div>
            <div className="lineup__item">
              <img src={images.player4} alt="" className="lineup__img"/>
              <div className="lineup__item-data">
                <img src={images.ru} alt="" className="lineup__item-flag"/>
                <div className="lineup__item-name">Perfecto</div>
                <div className="lineup__item-coef">1.22</div>
              </div>
            </div>
            <div className="lineup__item">
              <img src={images.player5} alt="" className="lineup__img"/>
              <div className="lineup__item-data">
                <img src={images.ru} alt="" className="lineup__item-flag"/>
                <div className="lineup__item-name">Perfecto</div>
                <div className="lineup__item-coef">1.22</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="head-to-head">
        <div className="container">
          <div className="title_wr">
            <h2 className="section-title">Head to head</h2>
          </div>

          <div className="lineup__header">
            <div className="lineup__team active">
              <div className="first-team__logo">
                <img className="first-team__logo-img" src={images.logo1} alt=""/>
              </div>
              <div className="first-team__description">
                <h3 className="first-team__name">
                  Natus Vincere
                </h3>
              </div>
            </div>
            <div className="lineup__team">
              <div className="second-team__description">
                <h3 className="second-team__name">
                  Vitality
                </h3>
              </div>
              <div className="second-team__logo">
                <img className="second-team__logo-img" src={images.logo2} alt=""/>
              </div>
            </div>

            <div className="stats">
              <div className="param">
                <div className="win__num">8</div>
                <div className="text">Wins</div>
              </div>

              <div className="param">
                <div className="win__num">1</div>
                <div className="text">Overtimes</div>
              </div>

              <div className="param">
                <div className="win__num">2</div>
                <div className="text">Wins</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Page3
