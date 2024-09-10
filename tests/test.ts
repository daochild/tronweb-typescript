'use strict';

// @ts-ignore
import TronWeb from "tronweb" ;
import "../src/index";

const tronWeb = new TronWeb({
    fullHost: 'https://api.trongrid.io',
    eventServer: 'https://api.someotherevent.io',
    solidityNode: 'https://api.someothersolidity.io',
});


async function main() {
    // console.log(TronWeb)
    // console.log(await tronWeb.createAccount())
    // console.log(await tronWeb.createRandom())
    // console.log(tronWeb.plugin.disablePlugins)
    // console.log(tronWeb.plugin.pluginNoOverride)
    // console.log(await tronWeb.solidityNode.isConnected())
    // console.log(tronWeb.fullNode)
    // console.log(tronWeb.eventServer)
    // console.log(tronWeb.utils.abi.encodeParamsV2ByABI(functionABI, args))
    // console.log(Object.keys(tronWeb.transactionBuilder));
    // console.log(tronWeb.transactionBuilder.tronWeb);
    // console.log(tronWeb.transactionBuilder.injectPromise);
    // await tronWeb.getEventByTransactionID("string")
    // await tronWeb.transactionBuilder.applyForSR("string", "string")
    // await tronWeb.trx.getAccount("string")
    // tronWeb.address.fromHex("string")
    // tronWeb.utils.transaction.txJsonToPb({})
    // tronWeb.utils.ethersUtils.toUtf8Bytes('string');
    // tronWeb.utils.ethersUtils.wordlists();

    Object.entries(tronWeb).map((entry, index) => {
        console.log(index)
        console.log('-----------------------------------')
        console.log(`key: ${entry[0]}`)
        console.log(`value:`, entry[1])
        console.log(`type: ${typeof entry[1]}`)
        console.log('-----------------------------------')
        console.log('')
    })
}

main()
    .then(() => {
        console.log("done");
        process.exit(0);
    })
    .catch(console.error)
