require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope kite bone tooth tissue rice noble pupil idea another army genre'; 
let testAccounts = [
"0x5346967894b906cc9a939238a26a3edcdd74ea0ffe2d8b6964bababe48c04040",
"0x847b240e60017a25f0a292c401c87da4456b246218b3be2e493ce5c462dc35e9",
"0xb79f7b0816df287b2079012b0613c327ad59f6b2b64475d5bcc1a15dc3786df7",
"0xf78908d7e0b1a2637b7b8ddf1c7c9f7167decd80635a07c674124bcbde5145e4",
"0xfda304de1f5cb8b4f3c2cb18152b21faeb314ba5fdca28f1e4404dcc5c565fa4",
"0x24ab0e52d4bfc37dcdba53f7ff4be4e3caebe8b2c9663250290b2b60ca879aa8",
"0x5e7035e9e0c5346a8e4aeaf470f2d9c8472ce81e6fb1a7210b2be6312dc578a4",
"0x54b003528021cee3bd347c4e2d14ef1e5e7490bfb1d62658aff682c4db49cfdd",
"0xb8950630d6131a7f0373268555596af014c97aa003e8845cd8cfe0256bea16e9",
"0x4e6dbcdb67301a5773b5d0d0c932b2fefcf1144e8aa083d73ef874a885a7f97d"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


