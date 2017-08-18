import formatSeconds from 'hhmmss'
import React from 'react'
import { string } from 'prop-types'
import ProgressCircle from '../ProgressCircle'
import TimerText from '../TimerText'

export default class PomodoroTimer extends React.Component {
  static propTypes = {
    breakLength: string.isRequired,
    pomodoroLength: string.isRequired,
  }

  render () {
    return (
      <div>
        <style jsx>{`
          .timer {
            align-items: center;
            display: flex;
            flex-direction: column;
          } 
        `}</style>
        <div className="timer">
          <ProgressCircle
            progress="20"
            break="10"
          />
          <TimerText
            timeLeft={this.props.pomodoroLength}
            breakTime={this.props.breakLength}
          />
        </div>
      </div>
    )
  }
}
 
