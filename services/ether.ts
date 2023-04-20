const ethers = require("ethers");
import * as dotenv from 'dotenv';
dotenv.config();

const contractABI = [
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "username",
                "type": "bytes32"
            }
        ],
        "name": "getScores",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "wins",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "losses",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "username",
                "type": "bytes32"
            },
            {
                "internalType": "uint256",
                "name": "wins",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "losses",
                "type": "uint256"
            }
        ],
        "name": "updateScores",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];

const contractAddress = process.env.CONTRACT_ADDRESS;

async function initContract() {
    const provider = new ethers.InfuraProvider(
        "goerli",
        process.env.INFURA_KEY
    );
  
    const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
  
    const contract = new ethers.Contract(contractAddress, contractABI, signer);
  
    return contract;
}

async function updateScores(username: string, wins: number, losses: number) {
    const contract = await initContract();

    const bytes32Username = ethers.ethers.encodeBytes32String(username);

    const tx = await contract.updateScores(bytes32Username, wins, losses);
    await tx.wait();
}
  
async function getScores(username: string) {
    const contract = await initContract();
  
    const bytes32Username = ethers.ethers.encodeBytes32String(username);
  
    const scores = await contract.getScores(bytes32Username);
  
    const wins = Number(scores[0]);
    const losses = Number(scores[1]);

    console.log(wins, losses);
  
    return { wins, losses };
}

export {updateScores, getScores}