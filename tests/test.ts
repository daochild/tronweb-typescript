'use strict';

import TronWeb from "tronweb"
import "../dist/index";

const tronWeb = new TronWeb({
        fullHost: 'https://api.trongrid.io',
        // eventServer: 'https://api.someotherevent.io',
        // privateKey: 'your private key'
    }
)

async function main() {
    await tronWeb.getEventByTransactionID("string")
    await tronWeb.transactionBuilder.applyForSR("string", "string")
    await tronWeb.trx.getAccount("string")
    tronWeb.address.fromHex("string")
    tronWeb.utils.transaction.txJsonToPb({})
}
