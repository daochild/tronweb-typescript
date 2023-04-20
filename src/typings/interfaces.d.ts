/**
 *  A string which is prefixed with ``0x`` and followed by any number
 *  of case-agnostic hexadecimal characters.
 *
 *  It must match the regular expression ``/0x[0-9A-Fa-f]*\/``.
 */
export type HexString = string;

/**
 *  A [[HexString]] whose length is even, which ensures it is a valid
 *  representation of binary data.
 */
export type DataHexString = string;

/**
 *  An object that can be used to represent binary data.
 */
export type BytesLike = DataHexString | Uint8Array;

/**
 *  About frgaments...
 *
 *  @_subsection api/abi/abi-coder:Fragments  [about-fragments]
 */
/**
 *  A type description in a JSON API.
 */
export interface JsonFragmentType {
    /**
     *  The parameter name.
     */
    readonly name?: string;
    /**
     *  If the parameter is indexed.
     */
    readonly indexed?: boolean;
    /**
     *  The type of the parameter.
     */
    readonly type?: string;
    /**
     *  The internal Solidity type.
     */
    readonly internalType?: string;
    /**
     *  The components for a tuple.
     */
    readonly components?: ReadonlyArray<JsonFragmentType>;
}

/**
 *  A fragment for a method, event or error in a JSON API.
 */
export interface JsonFragment {
    /**
     *  The name of the error, event, function, etc.
     */
    readonly name?: string;

    /**
     *  The type of the fragment (e.g. ``event``, ``"function"``, etc.)
     */
    readonly type?: string;

    /**
     *  If the event is anonymous.
     */
    readonly anonymous?: boolean;

    /**
     *  If the function is payable.
     */
    readonly payable?: boolean;

    /**
     *  If the function is constant.
     */
    readonly constant?: boolean;

    /**
     *  The mutability state of the function.
     */
    readonly stateMutability?: string;

    /**
     *  The input parameters.
     */
    readonly inputs?: ReadonlyArray<JsonFragmentType>;

    /**
     *  The output parameters.
     */
    readonly outputs?: ReadonlyArray<JsonFragmentType>;

    /**
     *  The gas limit to use when sending a transaction for this function.
     */
    readonly gas?: string;
}

export type Resource = "BANDWIDTH"|"ENERGY"

export type BlockInput = 'latest'|'earliest'|number

export interface Account {
    address: {
        base58: string,
        hex: string
    },
    privateKey: string,
    publicKey: string
    __proto__: Object
}

export interface AccountMnemonic {
    mnemonic: {
        phrase: string,
        path: string
        locale: string
    },
    privateKey: string,
    publicKey: string,
    address: string
}

export interface CreateRandomOptions {
    path: string,
    extraEntropy: string,
    locale: string
}

export interface Transaction {
    block: number,
    timestamp: number,
    contract: string,
    name: string,
    transaction: string,
    result: {
        r: string,
        afterSeed: string,
        s: string,
        index: string,
        previousSeed: string,
        updater: string,
        timestamp: string
    },
    resourceNode: string
}

export interface EventResult {
    block: number,
    timestamp: number,
    contract: string,
    name: string,
    transaction: string,
    result: {
        index: string,
        rng: string,
        timestamp: string
    },
    resourceNode: string
}

export interface TrxAccount {
    address: string;
    balance: number;
    frozen: { frozen_balance: number, expire_time: number }[];
    create_time: number;
    latest_opration_time: number;
    latest_consume_free_time: number;
    account_resource: {
        frozen_balance_for_energy: { frozen_balance: number, expire_time: number },
        latest_consume_time_for_energy: number
    };
    owner_permission: { permission_name: string, threshold: number, keys: [[Object]|Object] };
    active_permission: {
        type: string,
        id: number,
        permission_name: string,
        threshold: number,
        operations: string,
        keys: [Array<any>]
    }[];
    assetV2: { key: string, value: number }[];
    free_asset_net_usageV2: { key: string, value: number }[];
}

export interface ParameterValueOnTriggerSC {
    data: string,
    token_id: number,
    owner_address: string,
    call_token_value: number,
    contract_address: string
}

export interface RawDataContract {
    parameter: {
        value: {
            amount: number;
            owner_address: string;
            to_address: string;
        }|ParameterValueOnTriggerSC|Object,
        type_url: string;
    },
    type: string;
}

export interface Transaction {
    visible: boolean;
    signature?: string[];
    txID: string;
    raw_data: {
        contract: RawDataContract[]|Object[],
        ref_block_bytes: string;
        ref_block_hash: string;
        expiration: number;
        timestamp: number;
        fee_limit?: number;
    },
    raw_data_hex: string;
}

export interface TransactionResult {
    result: { [key: string]: any }|boolean;
    approved_list?: string[];
    transaction: {
        result: { result: boolean };
        txid: string;
        transaction: {
            signature: any[];
            txID: string;
            raw_data: object[];
            raw_data_hex: string;
        };
    }|Transaction;
}

export interface TronAccountResource {
    freeNetLimit: number;
    netLimit: number;
    assetNetUsed: { key: string; value: number }[];
    assetNetLimit: { key: string; value: number }[];
    totalNetLimit: number;
    totalNetWeight: number;
    energyLimit: number;
    totalEnergyLimit: number;
    totalEnergyWeight: number;
}

export interface BlockTransaction {
    txID: string,
    raw_data: Object[],
    raw_data_hex: string,
    ret?: any[],
    signature?: any[],
}

export interface BlockInfo {
    blockID: string;
    block_header: {
        raw_data: {
            number?: number;
            txTrieRoot: string;
            witness_address: string;
            parentHash: string;
            timestamp?: number;
            version?: number;
        };
        witness_signature: string;
    },
    transactions?: BlockTransaction[],
}

export interface KeyValue {
    key: string,
    value?: number
}

export interface ChainParameter extends KeyValue {}

export interface DelegatedResource {
    from: string;
    to: string;
    frozen_balance_for_bandwidth: number;
}

export interface DelegatedResourceList {
    delegatedResource: DelegatedResource[];
}

export interface DelegatedResourceAccount {
    account: string|HexString,
    toAccounts: string[]|HexString[]
}

export interface Exchange {
    exchange_id: number;
    creator_address: string|HexString;
    create_time: number;
    first_token_id: string;
    first_token_balance: number;
    second_token_id: string;
    second_token_balance: number;
}

export interface ConfigNodeInfo {
    activeNodeSize: number;
    allowAdaptiveEnergy: number;
    allowCreationOfContracts: number;
    backupListenPort: number;
    backupMemberSize: number;
    backupPriority: number;
    codeVersion: string;
    dbVersion: number;
    discoverEnable: boolean;
    listenPort: number;
    maxConnectCount: number;
    maxTimeRatio: number;
    minParticipationRate: number;
    minTimeRatio: number;
    p2pVersion: string;
    passiveNodeSize: number;
    sameIpMaxConnectCount: number;
    sendNodeSize: number;
    supportConstant: boolean;
    versionName: string;
    versionNum: string;
}

export interface MachineInfo {
    cpuCount: number;
    cpuRate: number;
    deadLockThreadCount: number;
    deadLockThreadInfoList: any[]; // this can be improved by defining a specific type
    freeMemory: number;
    javaVersion: string;
    jvmFreeMemory: number;
    jvmTotalMemoery: number;
    memoryDescInfoList: any[]; // this can be improved by defining a specific type
    osName: string;
    processCpuRate: number;
    threadCount: number;
    totalMemory: number;
}

export interface PeerInfo {
    active: boolean;
    avgLatency: number;
    blockInPorcSize: number;
    connectTime: number;
    disconnectTimes: number;
    headBlockTimeWeBothHave: number;
    headBlockWeBothHave: string;
    host: string;
    inFlow: number;
    lastBlockUpdateTime: number;
    lastSyncBlock: string;
    localDisconnectReason: string;
    needSyncFromPeer: boolean;
    needSyncFromUs: boolean;
    nodeCount: number;
    nodeId: string;
    port: number;
    remainNum: number;
    remoteDisconnectReason: string;
    score: number;
    syncBlockRequestedSize: number;
    syncFlag: boolean;
    syncToFetchSize: number;
    syncToFetchSizePeekNum: number;
    unFetchSynNum: number;
}

export interface NodeInfo {
    activeConnectCount: number;
    beginSyncNum: number;
    block: string;
    cheatWitnessInfoMap: any; // this can be improved by defining a specific type
    configNodeInfo: ConfigNodeInfo;
    currentConnectCount: number;
    machineInfo: MachineInfo;
    passiveConnectCount: number;
    peerList: PeerInfo[];
    solidityBlock: string;
    totalFlow: number;
}

export interface TokenInfo {
    owner_address: string;
    name: string;
    abbr: string;
    total_supply: number;
    trx_num: number;
    precision: number;
    num: number;
    start_time: number;
    end_time: number;
    description: string;
    url: string;
    id: string;
}

export interface Transaction {
    id: string;
    fee: number;
    blockNumber: number;
    blockTimeStamp: number;
    contractResult: string[];
    contract_address: string;
    receipt: {
        origin_energy_usage: number;
        energy_usage_total: number;
        net_fee: number;
        result: string;
    };
    log: {
        address: string;
        topics: string[];
        data: string;
    }[];
    internal_transactions?: {
        hash: string;
        caller_address: string;
        transferTo_address: string;
        callValueInfo: string[];
        note: string;
    }[];
}

export interface Proposal {
    proposal_id: number;
    proposer_address: string;
    parameters: { [key: string]: any }[]; // Assuming the parameters can be of any type
    expiration_time: number;
    create_time: number;
    approvals: string[];
    state: 'APPROVED' | 'DISAPPROVED' | 'IN_VOTING';
}

export interface Miner {
    address: string;
    voteCount: number;
    url: string;
    totalProduced: number;
    totalMissed: number;
    latestBlockNum: number;
    latestSlotNum: number;
    isJobs: boolean;
}

export interface AssetTRC10 {
    name: string;
    abbreviation: string;
    description: string;
    url: string;
    totalSupply: number;
    trxRatio: number;
    tokenRatio: number;
    saleStart: number;
    saleEnd: number;
    freeBandwidth: number;
    freeBandwidthLimit: number;
    frozenAmount: number;
    frozenDuration: number;
    precision: number;
    permission_id?: number;
}

export interface ContractExecutionParams {
    feeLimit: number;
    callValue: number;
    tokenId?: string;
    tokenValue?: number;
    userFeePercentage: number;
    originEnergyLimit: number;
    abi: string;
    bytecode: string;
    parameters?: string;
    name: string;
    permissionId?: number;
}

export interface EnergyEstimate {
    result: Object,
    energy_required: number
}

export interface TriggerConstantContractResult {
    result: {
        result: boolean;
    };
    energy_used: number;
    constant_result: string[];
    logs: {
        address: string;
        data: string;
        topics: string[];
    }[];
    transaction: {
        ret: {}[];
        visible: boolean;
        txID: string;
        raw_data: {
            contract: {
                parameter: {
                    value: {
                        data: string;
                        owner_address: string;
                        contract_address: string;
                    };
                    type_url: string;
                };
                type: string;
            }[];
            ref_block_bytes: string;
            ref_block_hash: string;
            expiration: number;
            timestamp: number;
        };
        raw_data_hex: string;
    };
}

export interface Header {
    ["string"]: string
}

export interface TronWebConstructor {
    fullHost: string,
    headers?: Header,
    privateKey?: string
}

export interface SideOptions {
    fullNode: string,
    solidityNode: string,
    eventServer: string,
    mainGatewayAddress: string,
    sideGatewayAddress: string,
    sideChainId: string
}

interface AssetUpdate {
    description?: string;
    url?: string;
    freeBandwidth: number;
    freeBandwidthLimit: number;
    permissionId?: number;
}

export interface TronContract {
    tronWeb: Object,
    injectPromise: Function,
    address: string
    abi: JsonFragment[] | []
    eventListener: boolean,
    bytecode: boolean|string,
    deployed: boolean|string,
    lastBlock: boolean|string|number,
    methods: Object
    methodInstances: Object
    props: [],
}

export interface TronContractResult {
    contract_address: string
    origin_address: string
    abi: JsonFragment[]|[]|Object
    bytecode: boolean|string,
    name: string
}
