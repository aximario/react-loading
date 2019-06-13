import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Loading from './Loading'

function request (log: string) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(log)
      resolve(log)
    }, 1000)
  })
}

ReactDOM.render(
  <Loading type="default" />,
  document.getElementById('root')
)
