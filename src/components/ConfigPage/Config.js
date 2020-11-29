import React from 'react'
import { BASE_URL, socket, superFetch } from '../../utils'

class Config extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      text: '',
      matches: []
    }
  }

  componentDidMount() {
    const url = `${BASE_URL}/hltv/getMatches/1`
    superFetch(url).then((matches) => {
      const newMatches = matches.filter(item => item.team1)
      this.setState({ matches: newMatches })
    })

  }

  render() {
    const onSelectMatch = (e) => {
      const id = e.target.value

      console.log('Selected;', id)

      const config = {
        matchId: id
      }
      socket.emit('new_config', config)
    }

    console.log('Matches', this.state.matches)

    const renderMatch = this.state.matches.map((item) => {
      return (
        <option key={item.id + 5 + item.id} value={item.id}>
          {item.team1.name} VS {item.team2.name}
        </option>
      )
    })

    if (this.state.matches.length === 0) return <div>
      <h1 style={{ marginBottom: '10px' }}>Config Page</h1>
      <p>Matches not found ...</p>
    </div>

    return (
      <div>
        <h1 style={{ marginBottom: '10px' }}>Config Page</h1>

        <label htmlFor="id-matches">Choose a match:</label>
        <select name="match" id="id-matches" onChange={onSelectMatch}>
          <option value="">Please choose an id</option>
          {renderMatch}
        </select>
      </div>
    )
  }
}

export default Config;
