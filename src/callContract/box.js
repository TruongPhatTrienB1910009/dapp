/* eslint-disable func-names */
const jsonInterface = [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [
            {
                "indexed": true,
                "name": "owner",
                "internalType": "address",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "approved",
                "internalType": "address",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "tokenId",
                "internalType": "uint256",
                "type": "uint256"
            }
        ],
        "name": "Approval",
        "anonymous": false,
        "type": "event"
    },
    {
        "inputs": [
            {
                "indexed": true,
                "name": "owner",
                "internalType": "address",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "operator",
                "internalType": "address",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "approved",
                "internalType": "bool",
                "type": "bool"
            }
        ],
        "name": "ApprovalForAll",
        "anonymous": false,
        "type": "event"
    },
    {
        "inputs": [
            {
                "indexed": true,
                "name": "previousOwner",
                "internalType": "address",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "newOwner",
                "internalType": "address",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "anonymous": false,
        "type": "event"
    },
    {
        "inputs": [
            {
                "indexed": true,
                "name": "from",
                "internalType": "address",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "to",
                "internalType": "address",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "tokenId",
                "internalType": "uint256",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "anonymous": false,
        "type": "event"
    },
    {
        "outputs": [
            {
                "name": "",
                "internalType": "uint256",
                "type": "uint256"
            }
        ],
        "inputs": [
            {
                "name": "",
                "internalType": "uint256",
                "type": "uint256"
            }
        ],
        "name": "NFT_PRICE",
        "stateMutability": "view",
        "type": "function"
    },
    {
        "outputs": [
            {
                "name": "",
                "internalType": "uint256",
                "type": "uint256"
            }
        ],
        "inputs": [
            {
                "name": "",
                "internalType": "uint256",
                "type": "uint256"
            }
        ],
        "name": "NFT_TYPE",
        "stateMutability": "view",
        "type": "function"
    },
    {
        "outputs": [
            {
                "name": "",
                "internalType": "uint256",
                "type": "uint256"
            }
        ],
        "inputs": [
            {
                "name": "",
                "internalType": "uint256",
                "type": "uint256"
            }
        ],
        "name": "NFT_TYPE_MAX_SUPPLY",
        "stateMutability": "view",
        "type": "function"
    },
    {
        "outputs": [
            {
                "name": "",
                "internalType": "uint256",
                "type": "uint256"
            }
        ],
        "inputs": [
            {
                "name": "",
                "internalType": "uint256",
                "type": "uint256"
            }
        ],
        "name": "NFT_TYPE_TOTAL_SUPPLY",
        "stateMutability": "view",
        "type": "function"
    },
    {
        "outputs": [],
        "inputs": [
            {
                "name": "to",
                "internalType": "address",
                "type": "address"
            },
            {
                "name": "tokenId",
                "internalType": "uint256",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "outputs": [
            {
                "name": "",
                "internalType": "uint256",
                "type": "uint256"
            }
        ],
        "inputs": [
            {
                "name": "owner",
                "internalType": "address",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "stateMutability": "view",
        "type": "function"
    },
    {
        "outputs": [
            {
                "name": "",
                "internalType": "string",
                "type": "string"
            }
        ],
        "inputs": [],
        "name": "baseNftUri",
        "stateMutability": "view",
        "type": "function"
    },
    {
        "outputs": [],
        "inputs": [
            {
                "name": "_tokenIds",
                "internalType": "uint256[]",
                "type": "uint256[]"
            },
            {
                "name": "_accounts",
                "internalType": "address[]",
                "type": "address[]"
            }
        ],
        "name": "batchTransferMulti",
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "outputs": [],
        "inputs": [
            {
                "name": "_tokenIds",
                "internalType": "uint256[]",
                "type": "uint256[]"
            },
            {
                "name": "_account",
                "internalType": "address",
                "type": "address"
            }
        ],
        "name": "batchTransferOne",
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "outputs": [],
        "inputs": [
            {
                "name": "_type",
                "internalType": "uint256",
                "type": "uint256"
            }
        ],
        "name": "buyItem",
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "outputs": [
            {
                "name": "",
                "internalType": "address",
                "type": "address"
            }
        ],
        "inputs": [
            {
                "name": "tokenId",
                "internalType": "uint256",
                "type": "uint256"
            }
        ],
        "name": "getApproved",
        "stateMutability": "view",
        "type": "function"
    },
    {
        "outputs": [
            {
                "name": "",
                "internalType": "bool",
                "type": "bool"
            }
        ],
        "inputs": [
            {
                "name": "owner",
                "internalType": "address",
                "type": "address"
            },
            {
                "name": "operator",
                "internalType": "address",
                "type": "address"
            }
        ],
        "name": "isApprovedForAll",
        "stateMutability": "view",
        "type": "function"
    },
    {
        "outputs": [
            {
                "name": "",
                "internalType": "string",
                "type": "string"
            }
        ],
        "inputs": [],
        "name": "name",
        "stateMutability": "view",
        "type": "function"
    },
    {
        "outputs": [
            {
                "name": "",
                "internalType": "address",
                "type": "address"
            }
        ],
        "inputs": [],
        "name": "owner",
        "stateMutability": "view",
        "type": "function"
    },
    {
        "outputs": [
            {
                "name": "",
                "internalType": "address",
                "type": "address"
            }
        ],
        "inputs": [
            {
                "name": "tokenId",
                "internalType": "uint256",
                "type": "uint256"
            }
        ],
        "name": "ownerOf",
        "stateMutability": "view",
        "type": "function"
    },
    {
        "outputs": [
            {
                "name": "",
                "internalType": "address",
                "type": "address"
            }
        ],
        "inputs": [],
        "name": "projectWallet",
        "stateMutability": "view",
        "type": "function"
    },
    {
        "outputs": [],
        "inputs": [],
        "name": "renounceOwnership",
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "outputs": [],
        "inputs": [
            {
                "name": "to",
                "internalType": "address",
                "type": "address"
            },
            {
                "name": "_type",
                "internalType": "uint256",
                "type": "uint256"
            }
        ],
        "name": "safeMint",
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "outputs": [],
        "inputs": [
            {
                "name": "from",
                "internalType": "address",
                "type": "address"
            },
            {
                "name": "to",
                "internalType": "address",
                "type": "address"
            },
            {
                "name": "tokenId",
                "internalType": "uint256",
                "type": "uint256"
            }
        ],
        "name": "safeTransferFrom",
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "outputs": [],
        "inputs": [
            {
                "name": "from",
                "internalType": "address",
                "type": "address"
            },
            {
                "name": "to",
                "internalType": "address",
                "type": "address"
            },
            {
                "name": "tokenId",
                "internalType": "uint256",
                "type": "uint256"
            },
            {
                "name": "data",
                "internalType": "bytes",
                "type": "bytes"
            }
        ],
        "name": "safeTransferFrom",
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "outputs": [],
        "inputs": [
            {
                "name": "_to",
                "internalType": "address",
                "type": "address"
            },
            {
                "name": "_number",
                "internalType": "uint256",
                "type": "uint256"
            },
            {
                "name": "_type",
                "internalType": "uint256",
                "type": "uint256"
            }
        ],
        "name": "saftBatchMint",
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "outputs": [],
        "inputs": [
            {
                "name": "operator",
                "internalType": "address",
                "type": "address"
            },
            {
                "name": "approved",
                "internalType": "bool",
                "type": "bool"
            }
        ],
        "name": "setApprovalForAll",
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "outputs": [],
        "inputs": [
            {
                "name": "_newBaseUri",
                "internalType": "string",
                "type": "string"
            }
        ],
        "name": "setBaseUri",
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "outputs": [],
        "inputs": [
            {
                "name": "_supply",
                "internalType": "uint256[]",
                "type": "uint256[]"
            }
        ],
        "name": "setMaxSupply",
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "outputs": [],
        "inputs": [
            {
                "name": "_token",
                "internalType": "address",
                "type": "address"
            }
        ],
        "name": "setPayment",
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "outputs": [],
        "inputs": [
            {
                "name": "_prices",
                "internalType": "uint256[]",
                "type": "uint256[]"
            }
        ],
        "name": "setPriceNft",
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "outputs": [],
        "inputs": [
            {
                "name": "_newProjectwallet",
                "internalType": "address",
                "type": "address"
            }
        ],
        "name": "setProjectwallet",
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "outputs": [
            {
                "name": "",
                "internalType": "bool",
                "type": "bool"
            }
        ],
        "inputs": [
            {
                "name": "interfaceId",
                "internalType": "bytes4",
                "type": "bytes4"
            }
        ],
        "name": "supportsInterface",
        "stateMutability": "view",
        "type": "function"
    },
    {
        "outputs": [
            {
                "name": "",
                "internalType": "string",
                "type": "string"
            }
        ],
        "inputs": [],
        "name": "symbol",
        "stateMutability": "view",
        "type": "function"
    },
    {
        "outputs": [
            {
                "name": "",
                "internalType": "uint256",
                "type": "uint256"
            }
        ],
        "inputs": [
            {
                "name": "index",
                "internalType": "uint256",
                "type": "uint256"
            }
        ],
        "name": "tokenByIndex",
        "stateMutability": "view",
        "type": "function"
    },
    {
        "outputs": [
            {
                "name": "",
                "internalType": "uint256",
                "type": "uint256"
            }
        ],
        "inputs": [
            {
                "name": "owner",
                "internalType": "address",
                "type": "address"
            },
            {
                "name": "index",
                "internalType": "uint256",
                "type": "uint256"
            }
        ],
        "name": "tokenOfOwnerByIndex",
        "stateMutability": "view",
        "type": "function"
    },
    {
        "outputs": [
            {
                "name": "",
                "internalType": "address",
                "type": "address"
            }
        ],
        "inputs": [],
        "name": "tokenPayment",
        "stateMutability": "view",
        "type": "function"
    },
    {
        "outputs": [
            {
                "name": "",
                "internalType": "string",
                "type": "string"
            }
        ],
        "inputs": [
            {
                "name": "tokenId",
                "internalType": "uint256",
                "type": "uint256"
            }
        ],
        "name": "tokenURI",
        "stateMutability": "view",
        "type": "function"
    },
    {
        "outputs": [
            {
                "name": "",
                "internalType": "uint256",
                "type": "uint256"
            }
        ],
        "inputs": [],
        "name": "totalSupply",
        "stateMutability": "view",
        "type": "function"
    },
    {
        "outputs": [],
        "inputs": [
            {
                "name": "from",
                "internalType": "address",
                "type": "address"
            },
            {
                "name": "to",
                "internalType": "address",
                "type": "address"
            },
            {
                "name": "tokenId",
                "internalType": "uint256",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "outputs": [],
        "inputs": [
            {
                "name": "newOwner",
                "internalType": "address",
                "type": "address"
            }
        ],
        "name": "transferOwnership",
        "stateMutability": "nonpayable",
        "type": "function"
    }
]
const address = "0x6Cab4A1c5ec3C8ab63ff8C4e5cb802207745471e";
const Contract = require('web3-eth-contract');

const vercelServer = 'https://nft-marketplace-nextjs-roan.vercel.app/';

Contract.setProvider('https://rpc-core.icecreamswap.com');

const contract = new Contract(jsonInterface, address);

const getListPrice = async () => {
    const listPrice = [];
    for (let i = 0; i < 3; i++) {
        // eslint-disable-next-line no-await-in-loop
        let data = await contract.methods.NFT_PRICE(i).call();
        data /= 1e18;
        // eslint-disable-next-line no-unused-expressions
        listPrice.push(data);
    }

    return listPrice;
}

const Web3 = require('web3')

const web3 = new Web3(window.ethereum)

const defaultAcount = "0xc3b9C379DDF74d37aF793baDA77D76dE9F51eF3A";
web3.eth.defaultAcount = defaultAcount;
const buyNft = () => {
    contract.methods.buyItem(0).send({
        from: web3.eth.defaultAcount
    })
        .on('transactionHash', (hash) => {
            console.log('Transaction hash:', hash);
        })
        .on('confirmation', (confirmationNumber, receipt) => {
            console.log('Confirmation number:', confirmationNumber);
            console.log('Receipt:', receipt);
        })
        .on('error', (error) => {
            console.error(error);
        });
}

export { getListPrice, buyNft };