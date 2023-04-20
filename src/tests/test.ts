'use strict';

/// <reference path="../typings/tronweb.d.ts" />


import * as tronweb from "@types/tronweb";
const TronWeb = require('tronweb')

const tronWeb: tronweb.TronWeb = new TronWeb({
        fullHost: 'https://api.trongrid.io',
        // eventServer: 'https://api.someotherevent.io',
        // privateKey: 'your private key'
    }
)

/// check typing

// const checkAccount = tronWeb.address.fromHex('ff')
// const checkUtils = tronWeb.utils.transaction.txPbToTxID({})
