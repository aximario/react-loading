import * as React from 'react'

interface Props {
  type?: 'default' | 'dotFade' | 'dotWave'
  color?: string
  size?: string
  className?: string
  style?: React.CSSProperties
}


export default function Loading (props: Props) {
  const loadings = {
    default: (
      <svg className={props.className} style={props.style} version="1.1" id="L9" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" enableBackground="new 0 0 0 0" xmlSpace="preserve" width={props.size} height={props.size}>
        <path fill={props.color} d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50" transform="rotate(181.328 50 50)">
          <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="1s" from="0 50 50" to="360 50 50" repeatCount="indefinite"></animateTransform>
        </path>
      </svg>
    ),
    dotFade: (
      <svg className={props.className} style={props.style} version="1.1" id="L4" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" enableBackground="new 0 0 0 0" xmlSpace="preserve" width={props.size} height={props.size}>
        <circle fill={props.color} stroke="none" cx="6" cy="50" r="6">
          <animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.1"></animate>    
        </circle>
        <circle fill={props.color} stroke="none" cx="26" cy="50" r="6">
          <animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.2"></animate>       
        </circle>
        <circle fill={props.color} stroke="none" cx="46" cy="50" r="6">
          <animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.3"></animate>     
        </circle>
      </svg>
    ),
    dotWave: (
      <svg className={props.className} style={props.style} version="1.1" id="L5" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" enableBackground="new 0 0 0 0" xmlSpace="preserve" width={props.size} height={props.size}>
        <circle fill={props.color} stroke="none" cx="6" cy="50" r="6" transform="translate(0 -3.8004)">
          <animateTransform attributeName="transform" dur="1s" type="translate" values="0 15 ; 0 -15; 0 15" repeatCount="indefinite" begin="0.1"></animateTransform>
        </circle>
        <circle fill={props.color} stroke="none" cx="30" cy="50" r="6" transform="translate(0 -6.5336)">
          <animateTransform attributeName="transform" dur="1s" type="translate" values="0 10 ; 0 -10; 0 10" repeatCount="indefinite" begin="0.2"></animateTransform>
        </circle>
        <circle fill={props.color} stroke="none" cx="54" cy="50" r="6" transform="translate(0 -4.7332)">
          <animateTransform attributeName="transform" dur="1s" type="translate" values="0 5 ; 0 -5; 0 5" repeatCount="indefinite" begin="0.3"></animateTransform>
        </circle>
      </svg>
    )
  }
  return loadings[props.type]
}

Loading.defaultProps = {
  type: 'default',
  color: '#000',
  size: '24px'
}
