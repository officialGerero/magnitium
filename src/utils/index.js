import socketIOClient from 'socket.io-client'

export async function superFetch(url) {
  const data = await fetch(url)
  return await data.json()
}

export const BASE_URL = 'https://warm-oasis-74394.herokuapp.com'
export const HLTV_URL = 'https://warm-oasis-74394.herokuapp.com/hltv'
export const socket = socketIOClient(`${BASE_URL}/`)
