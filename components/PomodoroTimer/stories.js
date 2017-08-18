import React from 'react'
import { storiesOf } from '@storybook/react'
import PomodoroTimer from './'

storiesOf('PomodoroTimer', module)
  .add('the timer bro', () => 
    <PomodoroTimer
      breakLength="300"
      pomodoroLength="1500"
    />
  )
