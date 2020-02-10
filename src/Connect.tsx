import React from 'react'
import { useWeb3React } from '@web3-react/core'
import { injected } from './connector'

interface ConnectProps {
  children: React.ReactNode
}

const Connect: React.FC<ConnectProps> = ({ children }) => {
  const { active, activate } = useWeb3React()

  const activateWeb3 = () => {
    activate(injected, undefined, true).catch(err => {
      console.error(err)
      debugger
    })
  }

  return active ?
    <>{children}</> :
    (
      <button type="button" onClick={() => activateWeb3()}>
        Connect
      </button>
    )
}

export default Connect
