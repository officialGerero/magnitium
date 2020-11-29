import 'babel-polyfill'
import './api/twitchExt'
import React from 'react'
import ReactDOM from 'react-dom'

const rootConfig = document.getElementById('config')
const rootVideoOverlay = document.getElementById('video-overlay')
const rootLifeConfig = document.getElementById('live-config')

if (rootConfig) {
  import('./components/ConfigPage/Config.js').then((Component) => ReactDOM.render(<Component.default/>, rootConfig))
} else if (rootVideoOverlay) {
  import('./components/VideoOverlay.js').then((Component) => ReactDOM.render(<Component.default/>, rootVideoOverlay))
} else if (rootLifeConfig) {
  import('./components/ConfigPage/Config.js').then(
    (Component) => ReactDOM.render(<Component.default/>, rootLifeConfig))
} else console.error('Unsupported Page!')
