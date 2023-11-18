declare module 'tronweb' {
    import {BigNumber} from "bignumber.js"
    import {
        Account,
        AccountMnemonic,
        AssetTRC10,
        AssetUpdate,
        BlockInfo,
        BlockInput,
        BlockTransaction,
        BytesLike,
        ChainParameter,
        ContractExecutionParams,
        CreateRandomOptions,
        DelegatedResourceAccount,
        DelegatedResourceList,
        EnergyEstimate,
        EventResult,
        Exchange,
        Header,
        HexString,
        JsonFragment,
        KeyValue,
        Miner,
        NodeInfo,
        Proposal,
        Resource,
        SideOptions,
        TokenInfo,
        Transaction,
        TransactionResult,
        TriggerConstantContractResult,
        TronAccountResource,
        TronContract,
        TronContractResult,
        TronWebConstructor,
        TrxAccount
    } from "tronweb/interfaces";

    export class TronWeb {
        address: typeof TronWeb.address;
        transactionBuilder: typeof TronWeb.transactionBuilder;
        trx: typeof TronWeb.trx
        utils: typeof TronWeb.utils & {"transaction": typeof TronWeb.utils.transaction};
        constructor(fullNode: string, solidityNode: string, eventServer: string|boolean, privateKey?: string|boolean);
        constructor(fullNode: string, solidityNode: string, eventServer: string|boolean, sideOptions: SideOptions, privateKey?: string|boolean);
        constructor(obj: TronWebConstructor);
        contract(data: JsonFragment[], address: string): TronContract;
        setHeader(header: Header): void|Error;
        currentProvider(): any;
        currentProviders(): any;
        getEventByTransactionID(transactionID: string): Promise<Transaction|any>;
        getEventResult(contractAddress: string, options?: Object): Promise<EventResult[]|any>; // check this return
        isConnected(): Object;
        isValidProvider(provider: any): any;
        setAddress(address: string): void|Error;
        setDefaultBlock(blockID?: BlockInput): void|string|boolean;
        setEventServer(eventServer: any): void|Error;
        setFullNode(fullNode: any): void|Error;
        setPrivateKey(privateKey: string): void|Error;
        setSolidityNode(solidityNode: any): void|Error;
        createAccount(): Promise<Account|any>;
        createRandom(options?: CreateRandomOptions): Promise<AccountMnemonic|any>;
        fromAscii(string: any, padding: any): any;
        fromDecimal(value: number|string): string;
        fromSun(sun: string|number): string;
        fromUtf8(string: string): string;
        fromMnemonic(mnemonic: string, path?: string, wordlist?: string): AccountMnemonic|Error;
        isAddress(address: string): boolean;
        sha3(string: string, prefix?: boolean): HexString;
        toAscii(hex: HexString): string;
        toBigNumber(amount: number|string|HexString): BigNumber|Object;
        toDecimal(value: string|HexString): number|string;
        toHex(val: string|number|object|[]|BigNumber): HexString;
        toSun(trx: number): string;
        toUtf8(hex: string): string;
        BigNumber(val: number|string|HexString): BigNumber
    }

    export namespace TronWeb {
        export namespace transactionBuilder {
            function addUpdateData(unsignedTransaction: JSON|Object, memo: string): Promise<Transaction|Object>;
            function applyForSR(address: string, url: string, options?: number): Promise<Transaction|Object>;
            function createAccount(address: string, options?: JSON|Object): Promise<Transaction|Object>;
            function createAsset(options: AssetTRC10, issuerAddress: string): Promise<Transaction|Object>;
            function createProposal(parameters: KeyValue[], issuerAddress: string, options?: number): Promise<Transaction|Object>;
            function createSmartContract(options: ContractExecutionParams, issuerAddress: string): Promise<Transaction|Object>;
            function createToken(options: AssetTRC10, issuerAddress: string): Promise<Transaction|Object>;
            function delegateResource(amount: number, receiverAddress: string, resource: string, address: string, lock: boolean, options?: Object): Promise<Object>;
            function deleteProposal(proposalID: number, issuerAddress: string, options?: number): Promise<Transaction|Object>;
            function estimateEnergy(contractAddress: string|HexString, functionSelector: string, options: Object, parameter: any[], issuerAddress: string|HexString): Promise<EnergyEstimate>;
            function extendExpiration(transaction: Transaction|JSON|Object, extension: number): Promise<Transaction>;
            function freezeBalance(amount: number, duration: number, resource: Resource, ownerAddress: string, receiverAddress: string, options?: number): Promise<Transaction>;
            function freezeBalanceV2(amount: number, resource: Resource, ownerAddress: string, options?: Object): Promise<Transaction|Object>;
            function injectExchangeTokens(exchangeID: number, tokenID: string, tokenAmount: number, ownerAddress: string, options?: number): Promise<Transaction>;
            function purchaseAsset(issuerAddress: string, tokenID: string, amount: number, buyer?: string, options?: number): Promise<Transaction|Object>;
            function purchaseToken(issuerAddress: string, tokenID: string, amount: number, buyer?: string, options?: number): Promise<Transaction|Object>;
            function sendAsset(to: string, amount: number, tokenID: string, from: string, options: number): Promise<Transaction|Object>;
            function sendToken(to: string, amount: number|string, tokenID: string, pk?: string): Promise<Transaction|Object>;
            function sendTrx(to: string, amount: number, from: string, options: number): Promise<Transaction|Object>;
            function tradeExchangeTokens(exchangeID: number, tokenID: string, tokenAmountSold: number, tokenAmountExpected: number, ownerAddress: string, options: number): Promise<Transaction|Object>;
            function triggerConfirmedConstantContract(contractAddress: string, functions: string, options: Object, parameter: any[], issuerAddress: string): Promise<TransactionResult|Object>;
            function triggerConstantContract(contractAddress: string, functions: string, options: Object, parameter: any[], issuerAddress: string): Promise<TriggerConstantContractResult|Object>;
            function triggerSmartContract(contractAddress: string, functions: string, options: Object, parameter: any[], issuerAddress: string): Promise<TriggerConstantContractResult|Object>;
            function undelegateResource(amount: number, receiverAddress: string, resource: string, address: string, options?: Object): Promise<Object>;
            function unfreezeBalance(resource: Resource, address: string, receiver: string, options: number): Promise<Transaction|Object>;
            function unfreezeBalanceV2(amount: number, resource: Resource, address: string, options: Object): Promise<Object>;
            function updateSetting(contract_address: string, consume_user_resource_percent: number, owner_address: string, options: number): Promise<Transaction|Object>;
            function updateAccountPermissions(owner_address: string, ownerPermissions: Object, witnessPermissions: Object|null, activesPermissions: Object[]): Promise<Transaction|Object>;
            function updateAsset(options: AssetUpdate, issuerAddress: string): Promise<Transaction|Object>;
            function updateBrokerage(brokerage: number, ownerAddress: string): Promise<Transaction|Object>;
            function updateEnergyLimit(contract_address: string, origin_energy_limit: number, owner_address: string, options: number): Promise<Transaction|Object>;
            function updateToken(options: AssetUpdate, issuerAddress: string): Promise<Transaction|Object>;
            function vote(votes: Object, voterAddress: string, option: number): Promise<Transaction|Object>;
            function voteProposal(proposalID: number, hasApproval: string, voterAddress: string, options: number): Promise<Transaction|Object>;
            function withdrawBlockRewards(address: string, options: number): Promise<Transaction|Object>;
            function withdrawExchangeTokens(exchangeID: number, tokenID: string, tokenAmount: number, ownerAddress: string, options: number): Promise<Transaction|Object>;
            function withdrawExpireUnfreeze(address: string): Promise<Object>;
        }
        export namespace trx {
            function getAccount(address: HexString|string): Promise<TrxAccount>;
            function getAccountResources(address: HexString|string): Promise<TronAccountResource>;
            function getApprovedList(r: Transaction): Promise<TransactionResult>;
            function getAvailableUnfreezeCount(address: string|HexString, options?: Object): Promise<Object>;
            function getBalance(address: string|HexString): Promise<number>;
            function getBandwidth(address: string|HexString): Promise<Object>;
            function getBlock(block?: number|string): Promise<BlockInfo>;
            function getBlockByHash(blockHash: string): Promise<BlockInfo>;
            function getBlockByNumber(blockID: number): Promise<BlockInfo>;
            function getBlockRange(start: number, end: number): Promise<BlockInfo[]>;
            function getBlockTransactionCount(block: number|string): Promise<Object|number>;
            function getBrokerage(address: string|HexString): Promise<number|any>;
            function getCanDelegatedMaxSize(address: string|HexString, resource?: Resource, options?: Object): Promise<Object>;
            function getCanWithdrawUnfreezeAmount(address: string|HexString, timestamp?: number, options?: Object): Promise<Object>;
            function getChainParameters(): Promise<ChainParameter[]|any>;
            function getConfirmedTransaction(transactionID: string): Promise<Object>;
            function getContract(contractAddress: string|HexString): Promise<TronContractResult|TronContract|Object>;
            function getCurrentBlock(): Promise<BlockInfo>;
            function getDelegatedResourceV2(fromAddress: string|HexString, toAddress: string|HexString, options?: Object): Promise<DelegatedResourceList|Object>;
            function getDelegatedResourceAccountIndexV2(address: string|HexString, options?: Object): Promise<DelegatedResourceAccount|Object>;
            function getExchangeByID(exchangeID: number): Promise<Exchange|Object>;
            function getNodeInfo(): Promise<NodeInfo|Object>;
            function getReward(address: string|HexString): Promise<number>;
            function getSignWeight(tx: Transaction): Promise<TransactionResult|Object>;
            function getTokenByID(tknID: string|number): Promise<TokenInfo|Object>;
            function getTokenFromID(tokenID: string|number): Promise<TokenInfo>;
            function getTokenListByName(name: string): Promise<TokenInfo[]|Object[]>;
            function getTokensIssuedByAddress(address: string|HexString): Promise<Object>;
            function getTransaction(transactionID: string): Promise<BlockTransaction|Object>;
            function getTransactionFromBlock(block: number|string, index: number): Promise<BlockTransaction[]|Object[]|BlockTransaction|Object>;
            function getTransactionInfo(transactionID: string): Promise<Transaction|Object>;
            function getUnconfirmedBalance(address: string): Promise<number>;
            function getUnconfirmedBrokerage(address: string): Promise<number>;
            function getUnconfirmedReward(address: string): Promise<number>;
            function getUnconfirmedTransactionInfo(txid: string): Promise<Transaction|Object>;
            function listExchanges(): Promise<Exchange[]|Object[]>;
            function listExchangesPaginated(limit: number, offset: number): Promise<Exchange[]|Object[]>;
            function listNodes(): Promise<string[]|Object>;
            function listProposals(): Promise<Proposal[]|Object[]|Object>;
            function listSuperRepresentatives(): Promise<Miner[]|Object[]>;
            function listTokens(limit?: number, offset?: number): Promise<TokenInfo[]|Object[]>;
            function sendRawTransaction(signedTransaction: JSON|Object, options?: any): Promise<TransactionResult|Object>;
            function sendHexTransaction(signedHexTransaction: string|HexString): Promise<Transaction|Object>;
            function sendToken(to: string, amount: number, tokenID: string, from: string, options: number): Promise<TransactionResult|Object>;
            function sendTransaction(to: string, amount: number, pk?: string): Promise<TransactionResult|Object>;
            function sign(transaction: Object, privateKey: string): Promise<Transaction|Object>;
            function sign(str: string, privateKey: string): Promise<string>;
            function signMessageV2(msg: string|BytesLike, privateKey: string): Promise<string>;
            function timeUntilNextVoteCycle(): Promise<number>;
            function multiSign(tx: JSON|Object, pk: string, permissionId: number): Promise<Transaction|Object>;
            function verifyMessage(message: string|HexString, signature: string, address: string): Promise<boolean>;
            function verifyMessageV2(message: string|HexString, signature: string): Promise<string>;
            function _signTypedData(domain: JSON|Object, types: JSON|Object, value: JSON|Object, privateKey: string): Promise<string>;
            function verifyTypedData(domain: JSON|Object, types: JSON|Object, value: JSON|Object, signature: string, address: string): Promise<boolean|Error>;
        }
        export namespace address {
            function fromHex(hex: string): string;
            function fromPrivateKey(pk: string): string;
            function toHex(base58: string): string;
        }
        export namespace utils {
            export namespace transaction {
                function txJsonToPb(tx: JSON|Object): Object;
                function txPbToTxID(tx: JSON|Object): string;
            }
        }
    }

    export default TronWeb;
}
