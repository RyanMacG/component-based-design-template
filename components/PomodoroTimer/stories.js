import React from 'react'
import { storiesOf } from '@storybook/react'
import PomodoroTimer from './'

storiesOf('PomodoroTimer', module)
  .add('standard timer', () => 
    <PomodoroTimer
      breakLength={300}
      pomodoroLength={1500}
    />
  )
  .add('short timer', () => 
    <PomodoroTimer
      breakLength={5}
      pomodoroLength={10}
    />
  )
