import React from 'react'
import { storiesOf } from '@storybook/react'
import ProgressCircle from './'

storiesOf('ProgressCircle', module)
  .add('with no progress', () =>
    <ProgressCircle
      progress="0"
      break="0"
    />
  )
  .add('with progress', () =>
    <ProgressCircle
      progress="50"
      break="0"
    />
  )
  .add('with more progress', () =>
    <ProgressCircle
      progress="75"
      break="0"
    />
  )
  .add('with less progress', () =>
    <ProgressCircle
      progress="15"
      break="0"
    />
  )
  .add('with break period', () =>
    <ProgressCircle
      progress="0"
      break="10"
    />
  )
  .add('with break period and progress', () =>
    <ProgressCircle
      progress="95"
      break="10"
    />
  )
