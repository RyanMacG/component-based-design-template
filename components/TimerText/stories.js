import React from 'react'
import { storiesOf } from '@storybook/react'
import TimerText from './'

storiesOf('TimerText', module)
  .add('with no time left', () =>
    <TimerText
      timeLeft="0"
      breakTime="0"
    />
  )
  .add('with time left', () =>
    <TimerText
      timeLeft="600"
      breakTime="300"
    />
  )
  .add('on a break', () =>
    <TimerText
      timeLeft="0"
      breakTime="200"
    />
  )
