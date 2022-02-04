import * as fs from 'fs';
import {CONTRACT_ADDRESSES_FILE, CONTRACT_ADDRESSES_PATH} from "./constants";

const JSON_FILE_PATH = CONTRACT_ADDRESSES_PATH + CONTRACT_ADDRESSES_FILE;

export interface IContractAddressConfig {
  contract: string;
  address: string;
}

export const readContractAddressesFromJSON = () => {
  const content = fs.readFileSync(JSON_FILE_PATH, "utf8");
  let json;

  try {
    json = JSON.parse(content);
  } catch {
    json = {};
  }

  return json;
}

export const writeContractAddressToJSON = (data: IContractAddressConfig) => {
  const json = readContractAddressesFromJSON();

  json[data.contract] = data.address;

  fs.writeFileSync(JSON_FILE_PATH, JSON.stringify(json), "utf8");
}

export const writeContractAddressesToJSON = (datas: IContractAddressConfig[]) => {
  const json = readContractAddressesFromJSON();

  for (const data of datas) {
    json[data.contract] = data.address;
  }

  fs.writeFileSync(JSON_FILE_PATH, JSON.stringify(json, null, 2), "utf8");
}
