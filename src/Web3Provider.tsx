import React from 'react'
import { Web3ReactProvider } from '@web3-react/core'
import { Web3Provider as EthersWeb3Provider } from '@ethersproject/providers'

const ETHERS_POLLING_INTERVAL = 1000

const getLibrary = (provider: any) => {
  const library = new EthersWeb3Provider(provider)
  library.pollingInterval = ETHERS_POLLING_INTERVAL
  return library
}

interface Web3ProviderProps {
  children: React.ReactNode
}

const Web3Provider: React.FC<Web3ProviderProps> = ({ children }) => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>{children}</Web3ReactProvider>
  )
}

export default Web3Provider
