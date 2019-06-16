import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Loading from './Loading'
import './index.css'

function request (log: string) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(log)
      resolve(log)
    }, 1000)
  })
}

ReactDOM.render(
  <Loading type="dotWave" className="loading" style={{ marginLeft: '50px', width: '30px', height: '30px', color: 'red'}} />,
  document.getElementById('root')
)
