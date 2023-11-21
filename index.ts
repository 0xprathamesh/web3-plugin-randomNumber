import { Web3PluginBase, Contract } from "web3";
import { abi } from "./artifacts";


export class RandomNumberGenerator extends Web3PluginBase {
  public pluginNamespace = "randomNumberGenerator";

  async generateRandomNumber(contractAddress : string , userProvidedSeed: number) {
    const contract = new Contract(abi, contractAddress);
    contract.link(this);
    return contract.methods.generateRandomNumber(userProvidedSeed).call();
  }
}

declare module "web3" {
  interface Web3Context {
      randomNumberGenerator: RandomNumberGenerator;
  }
}