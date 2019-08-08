const Web3 = require('web3');
const web3 = new Web3('https://ropsten.infura.io/v3/a16d7d84a02046819ae1f280742c630c');

async function generateAddress() {
    try {
        const result = await web3.eth.accounts.create();
        console.log(result);
    } catch (e) {
        console.error(e);
    }
}

generateAddress();