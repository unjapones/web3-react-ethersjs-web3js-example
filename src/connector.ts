import { InjectedConnector } from '@web3-react/injected-connector'

export const CHAIN_IDS = [
  42 // Kovan
]

export const injected = new InjectedConnector({ supportedChainIds: CHAIN_IDS })
