import React from 'react'
import ReactDom from 'react-dom'

const MOUNT_NODE = document.getElementById('app')

const ConnectedApp = () => (
  <div>ConnectedApp</div>
)

ReactDom.render(<ConnectedApp />, MOUNT_NODE)
