const Web3 = require('web3');
const web3 = new Web3('https://ropsten.infura.io/v3/a16d7d84a02046819ae1f280742c630c');  //infura endpoint

async function getInfo () {
    const result = await web3.eth.net.getNetworkType();
    console.log(result);
}

getInfo();