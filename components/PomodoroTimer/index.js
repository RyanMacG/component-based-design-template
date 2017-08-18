import formatSeconds from 'hhmmss'
import React from 'react'
import ReactAnimationFrame from 'react-animation-frame'
import { number } from 'prop-types'
import ProgressCircle from '../ProgressCircle'
import TimerText from '../TimerText'

@ReactAnimationFrame
export default class PomodoroTimer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      startTime: new Date().getTime()/1000,
      timeLeft: props.pomodoroLength,
      breakTime: props.breakLength,
      progress: 0,
      break: 100 * (props.breakLength / (props.pomodoroLength + props.breakLength))
    }
  }

  static propTypes = {
    breakLength: number.isRequired,
    pomodoroLength: number.isRequired,
  }

  now () {
    return new Date().getTime()/1000
  }

  calculateTimeLeft (timeNow) {
    return this.props.pomodoroLength - (timeNow - this.state.startTime)
  }

  calculateBreakTimeLeft (timeNow) {
    const breakStart = this.state.startTime + this.props.pomodoroLength

    return (this.props.breakLength - (timeNow - breakStart))
  }

  calculateProgress (timeNow) {
    const timeElapsed = (timeNow - this.state.startTime)
    return 100*(timeElapsed / (this.props.pomodoroLength + this.props.breakLength))
  }

  onAnimationFrame (time) {
    const timeNow = this.now()

    if(this.calculateProgress(timeNow) <= 100) {
      this.setState({
        breakTime: this.calculateBreakTimeLeft(timeNow),
        progress: this.calculateProgress(timeNow),
        timeLeft: this.calculateTimeLeft(timeNow)
      })
    } else {
      this.setState({
        breakTime: 0,
        progress: 99.99,
        timeLeft: 0
      })
    }
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
            progress={this.state.progress}
            break={this.state.break}
          />
          <TimerText
            timeLeft={this.state.timeLeft}
            breakTime={this.state.breakTime}
          />
        </div>
      </div>
    )
  }
}
 
