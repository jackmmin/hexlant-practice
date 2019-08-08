const Web3 = require( 'web3' );
const web3 = new Web3( 'https://ropsten.infura.io/v3/a16d7d84a02046819ae1f280742c630c' );
const privateKey = '0x5873419dc18de00c82fd0d7e52f33c61138a0bf70854afee7d0cf8720df6891b';

async function transfer( to, value ) {
    let tx = {
        to,
        value,
        gas: 2000000
    };

    try {
        let account = await web3.eth.accounts.privateKeyToAccount( privateKey );  //privatekey 입력
        console.log( account );
        const result = await account.signTransaction( tx );
        console.log( result );

        const txid = await web3.eth.sendSignedTransaction( result.rawTransaction );
        console.log( txid );
    } catch ( e ) {
        console.error( e );
    }
}

const amount = '1';
const etherTowei = web3.utils.toWei( amount );
// console.log( etherTowei );
transfer('0x2270F01310A54f309fB7f55D2ee9449981470C1A', '5000000000000000000');