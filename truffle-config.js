const HDWalletProvider = require('truffle-hdwallet-provider-privkey');  // npm 모듈
const privateKeys = ['5873419dc18de00c82fd0d7e52f33c61138a0bf70854afee7d0cf8720df6891b']; // private keys

module.exports = {
  //Network : 배포 할 네트워크에 대한 Config
  networks: {
    development: {
      provider: () => {
        return new HDWalletProvider(privateKeys, 'https://ropsten.infura.io/v3/a16d7d84a02046819ae1f280742c630c');
      },
      gasPrice: 20000000000,
      network_id: 3
    },
    ropsten: {
      provider: () => {
        return new HDWalletProvider(privateKeys, 'https://ropsten.infura.io/v3/a16d7d84a02046819ae1f280742c630c');
      },
      gasPrice: 20000000000,
      network_id: 3
    },
  },
  compilers: {
    solc: {
      version: '0.4.25',
      docker: false,
    }
  }
};
