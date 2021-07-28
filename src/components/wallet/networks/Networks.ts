export const MAINNET = 1
export const RINKEBY = 4

import MainnetNetworkSpecifics from './Mainnet'
import RinkebyNetworkSpecifics from './Rinkeby'
import KovanNetworkSpecifics from './Kovan'
import TestNetworkSpecifics from './Test'
import KovanAVMNetworkSpecifics from './KovanAVM'

export type ExternalAddresses = {
  dai: string
  cDai: string
  weth: string
}

export type INetworkSpecifics = {
  getNetworkName(): string
  getChainID(): number
  // getDeployedAddresses(): any
  // getDeployedABIs(): any
  // getExternalAddresses(): ExternalAddresses
  // getTokenList(): any
  // getSubgraphURL(): string
  getEtherscanTxUrl(tx: string): string
}

const specifics: INetworkSpecifics[] = [
  new MainnetNetworkSpecifics(),
  new RinkebyNetworkSpecifics(),
  new KovanNetworkSpecifics(),
  new TestNetworkSpecifics(),
  new KovanAVMNetworkSpecifics(),
]

export function getNetworkSpecificsByNetworkName(
  networkName: string
): INetworkSpecifics {
  for (const s of specifics) {
    if (s.getNetworkName() === networkName) {
      return s
    }
  }
}

if (!process.env.NEXT_PUBLIC_NETWORK) {
  console.log('WARNING: NEXT_PUBLIC_NETWORK not found. Defaulting to rinkeby')
}

const networkName = process.env.NEXT_PUBLIC_NETWORK
  ? process.env.NEXT_PUBLIC_NETWORK
  : 'rinkeby'

export const NETWORK = getNetworkSpecificsByNetworkName(networkName)

if (!NETWORK) {
  throw 'no network config: ' + networkName
}
