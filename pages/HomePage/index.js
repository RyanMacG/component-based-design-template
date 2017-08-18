import React from 'react'
import PomodoroTimer from '../../components/PomodoroTimer'

export default class HomePage extends React.Component {
  render () {
    return (
      <div>
        <style jsx>{`
          .container {
            background: #AEC6CF;
            height: 667px;
            width: 375px;
            margin: auto;
            padding-top: 4.5rem;
          }
        `}</style>

        <div className="container">
          <PomodoroTimer 
            breakLength="300"
            pomodoroLength="1500"
          />
        </div>
      </div>
    )
  }
}
