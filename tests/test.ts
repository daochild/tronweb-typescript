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
    await tronWeb.getEventByTransactionID()
    await tronWeb.transactionBuilder.applyForSR()
    await tronWeb.trx.getAccount()
    await tronWeb.address.fromHex()
    await tronWeb.utils.transaction.txJsonToPb()
}
