import { INetworkSpecifics, ExternalAddresses } from './Networks'
// import DeployedAddressesKovanAVM from '../../assets/deployed-kovan-avm.json'
// import DeployedABIsKovanAVM from '../../assets/abis-kovan-avm.json'
// import TokenListKovan from '../../assets/token-list-kovan.json'

export default class KovanAVMNetworkSpecifics implements INetworkSpecifics {
  getNetworkName(): string {
    return 'kovan_avm'
  }

  getChainID(): number {
    return 212984383488152
  }

  // getDeployedAddresses(): any {
  //   return DeployedAddressesKovanAVM
  // }

  // getDeployedABIs(): any {
  //   return DeployedABIsKovanAVM
  // }

  // getExternalAddresses(): ExternalAddresses {
  //   return {
  //     dai: '0x0000000000000000000000000000000000000001',
  //     cDai: '0x0000000000000000000000000000000000000001',
  //     weth: '0x0000000000000000000000000000000000000001',
  //   }
  // }

  // getTokenList(): any {
  //   return TokenListKovan
  // }

  // getSubgraphURL(): string {
  //   return 'https://subgraph-kovan-avm.backend.ideamarket.io/subgraphs/name/Ideamarket/IdeamarketKOVANAVM'
  // }

  getEtherscanTxUrl(tx: string): string {
    return `https://kovan.etherscan.io/tx/${tx}`
  }
}
