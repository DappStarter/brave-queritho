require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'give narrow frown ski strike rival noise essay inner drop slot gather'; 
let testAccounts = [
"0xc2995b6476159864fa598e1908e447b14cd707d565ca4cec057122b3097f0c02",
"0x6f26787487d51052dcd59082c8d8b5a7541984260e52c70022a4ad25939f4d88",
"0xbaa45851602830ca19bbfd9e05abb90cfbcc35645909bbc2e3782e2ff9edc77e",
"0xa13ff00ac2ab7666b6b8d0d2c111b7810531e7707aa056bba3672334547bb884",
"0x8e5ecee036a7b1f665b03efbdc584f6e2468e64c38c40751b88c27de5fe412da",
"0xdd70db9a69521e5a7c9e17aa6b4b65039345f7ac1680655440ff685a1742f6ae",
"0xd4fa90938fdac35201ea5cecee68caeeb62b7da50b4e2a1371e4dd0074a2fdb1",
"0x30e9e4e720307416f6a03a0d09b15589496b24ed2c88470a09fc85c8da379fd1",
"0x05c38d1c432d0d8483298b88510497d0799bc9c4328da3cf9d4a14efb974667c",
"0x59a9b6d776f4e672baa1699388beb8037cb73d8c827fd5d910e4dab6ee0be01f"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


