import * as React from 'react'

interface Props {
  type?: 'default' | 'dotFade' | 'dotWave' | 'spin'
  color?: string
  size?: string
  className?: string
  style?: React.CSSProperties
}


export default function Loading (props: Props) {
  const loadings = {
    default: (
      <svg className={props.className} style={props.style} width={props.size} height={props.size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
        <circle cx="50" cy="50" fill="none" stroke="#000000" strokeWidth="10" r="40" strokeDasharray="188.49555921538757 64.83185307179586" transform="rotate(59.6376 50 50)">
          <animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 50;360 50 50" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animateTransform>
        </circle>
      </svg>
    ),
    dotFade: (
      <svg className={props.className} style={props.style} width={props.size} height={props.size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
        <circle fill={props.color} stroke="none" cx="16" cy="50" r="8">
          <animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.1"></animate>    
        </circle>
        <circle fill={props.color} stroke="none" cx="50" cy="50" r="8">
          <animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.2"></animate>       
        </circle>
        <circle fill={props.color} stroke="none" cx="84" cy="50" r="8">
          <animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.3"></animate>     
        </circle>
      </svg>
    ),
    dotWave: (
      <svg className={props.className} style={props.style} width={props.size} height={props.size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
        <circle fill={props.color} stroke="none" cx="16" cy="50" r="8" transform="translate(0 -3.8004)">
          <animateTransform attributeName="transform" dur="1s" type="translate" values="0 15 ; 0 -15; 0 15" repeatCount="indefinite" begin="0.1"></animateTransform>
        </circle>
        <circle fill={props.color} stroke="none" cx="50" cy="50" r="8" transform="translate(0 -6.5336)">
          <animateTransform attributeName="transform" dur="1s" type="translate" values="0 10 ; 0 -10; 0 10" repeatCount="indefinite" begin="0.2"></animateTransform>
        </circle>
        <circle fill={props.color} stroke="none" cx="84" cy="50" r="8" transform="translate(0 -4.7332)">
          <animateTransform attributeName="transform" dur="1s" type="translate" values="0 5 ; 0 -5; 0 5" repeatCount="indefinite" begin="0.3"></animateTransform>
        </circle>
      </svg>
    ),
    spin: (
      <svg className={props.className} style={props.style} width={props.size} height={props.size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
        <g transform="rotate(0 50 50)">
          <rect x="46.5" y="3.5" rx="34.875" ry="2.625" width="7" height="27" fill="#000000">
            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.875s" repeatCount="indefinite"></animate>
          </rect>
        </g>
        <g transform="rotate(45 50 50)">
          <rect x="46.5" y="3.5" rx="34.875" ry="2.625" width="7" height="27" fill="#000000">
            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.75s" repeatCount="indefinite"></animate>
          </rect>
        </g>
        <g transform="rotate(90 50 50)">
          <rect x="46.5" y="3.5" rx="34.875" ry="2.625" width="7" height="27" fill="#000000">
            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.625s" repeatCount="indefinite"></animate>
          </rect>
        </g>
        <g transform="rotate(135 50 50)">
          <rect x="46.5" y="3.5" rx="34.875" ry="2.625" width="7" height="27" fill="#000000">
            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5s" repeatCount="indefinite"></animate>
          </rect>
        </g>
        <g transform="rotate(180 50 50)">
          <rect x="46.5" y="3.5" rx="34.875" ry="2.625" width="7" height="27" fill="#000000">
            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.375s" repeatCount="indefinite"></animate>
          </rect>
        </g>
        <g transform="rotate(225 50 50)">
          <rect x="46.5" y="3.5" rx="34.875" ry="2.625" width="7" height="27" fill="#000000">
            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.25s" repeatCount="indefinite"></animate>
          </rect>
        </g>
        <g transform="rotate(270 50 50)">
          <rect x="46.5" y="3.5" rx="34.875" ry="2.625" width="7" height="27" fill="#000000">
            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.125s" repeatCount="indefinite"></animate>
          </rect>
        </g>
        <g transform="rotate(315 50 50)">
          <rect x="46.5" y="3.5" rx="34.875" ry="2.625" width="7" height="27" fill="#000000">
            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animate>
          </rect>
        </g>
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
