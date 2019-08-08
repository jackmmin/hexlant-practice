const Web3 = require('web3');
const web3 = new Web3('https://ropsten.infura.io/v/a16d7d84a02046819ae1f280742c630c');

async function getTransactionReceipt(hash) {
    const result = await web3.eth.getTransactionReceipt(hash);
    console.log(result)
}

getTransactionReceipt('0xc046802e7578c2f684fa811dd9b7adb9e0c5a08dd1819d252fbd2c85ca3270d6');
//실패 트랜잭션
//getTransactionReceipt('0x2b8bc156431691ca9c33a6c02a6a08e123294937307fc87f1a5762680c7d11fe');



