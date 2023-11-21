import { Web3 } from "web3";
import { RandomNumberGenerator } from "./index";

const web3 = new Web3(`https://sepolia.infura.io/v3/cb77ec7104e04b26a8bba8520e720054`);
web3.registerPlugin(new RandomNumberGenerator())

const contractAddress = '0x5F85056d0Ee64fB9603e146B50035Feb31272e04';
const userProvidedSeed = 100;
const test = async () => {
    const res = await web3.randomNumberGenerator.generateRandomNumber(contractAddress, userProvidedSeed);
    console.log(res.toString());

}
test().catch();