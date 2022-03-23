const zipCode = '41476'

import { css } from "uebersicht"
export const refreshFrequency = 1000*60*60*12; // widget will run command once a second

const box = css`
  position: relative;
  left: 30px;
  top: 30px;
  padding: 5px;
  color: black;
  background: white;
  display: flex;
  border-radius: 5px;
  align-items: center;
`

const info = css`
  text-align: right;
  padding-left: 5px;
`
export const initialState = { output: 'fetching data...' };

export const command = `curl -sS https://portal.postnord.com/api/sendoutarrival/closest?postalCode=${zipCode}`

export const render = command => {
  const data = command?.output && JSON.parse(command.output)
  if(!data) return null
  return (
    <div className={box}>
      <img width="50" height="50" src="https://www.postnord.se/siteassets/logos-and-badges/pn_16x16px_rgb.svg" />
      <div className={info}>
          Nästa: {data.delivery}<br />
          Kommande: {data.upcoming}
      </div>
    </div>
  )
}