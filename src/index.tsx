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
  <Loading className="loading" style={{ marginLeft: '50px', width: '100px', height: '100px', color: 'red'}} />,
  document.getElementById('root')
)
