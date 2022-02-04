import { ContractReceipt, ContractTransaction } from "@ethersproject/contracts";

export const waitFor = async (txPromise: Promise<ContractTransaction>): Promise<ContractReceipt> => {
    return await txPromise.then((tx) => tx.wait());
}

