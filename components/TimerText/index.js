import formatSeconds from 'hhmmss'
import React from 'react'
import { number } from 'prop-types'

export default class TimerText extends React.Component {
  static propTypes = {
    breakTime: number.isRequired,
    timeLeft: number.isRequired,
  }

  isDuringBreak () {
    return this.props.timeLeft <= 0 && this.props.breakTime > 0
  }

  isOutOfTime () {
    return !this.isDuringBreak() 
      && !(this.props.timeLeft > 0)
  }

  buildClassName () {
    if (this.isOutOfTime()) return 'blinking'
    if (this.isDuringBreak()) return 'break'

    return ''
  }

  displayTime () {
    if (this.isDuringBreak()) return this.props.breakTime
    return this.props.timeLeft
  }

  render () {
    return (
      <div>
        <style jsx>{`
          span {
            color: #121e22; 
            cursor: default;
            font-size: 3rem;
            font-weight: 600;
            line-height: 1.5;
            user-select: none;
          }

          .blinking {
            animation: blinker 1s linear infinite;
            color: #da777e;
          }

          .break {
            color: #a2d899;
          }

          @keyframes blinker {
            50% { opacity: 0; }
          }
        `}</style>
        <span className={this.buildClassName()}>
          {formatSeconds(this.displayTime())}
        </span>
      </div>
    )
  }
}
 
