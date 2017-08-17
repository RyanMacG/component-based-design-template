import React from 'react'
import { storiesOf } from '@storybook/react'
import MeritTransferBox from './'

storiesOf('MeritTransferBox', module)
  .add('with a sender, a receiver, and a message', () =>
    <MeritTransferBox
      sender={{ name: 'Rory MacDonald', imageUrl: 'https://www.gravatar.com/avatar/29dddd3c30fef763cdbe9520071cb4bb' }}
      receiver={{ name: 'Camilla VK', imageUrl: 'https://www.gravatar.com/avatar/cb8c5457bdd78d870406818b05723258' }}
      message="for a great showcase!"
    />
  )
