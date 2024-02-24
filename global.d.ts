import { BigNumber} from '@ethersproject/bignumber';

declare interface msg {
  sender: address
  call(contract: address, method: string, parameters: any[]): Promise<any>
  staticCall(contract: address, method: string, parameters?: any[]): Promise<any>
  delegate(contract: address, method: string, parameters: any[]): Promise<any>
  staticDelegate(contract: address, method: string, parameters?: any[]): Promise<any>
}

declare global {
  const BigNumber: BigNumber
  type BigNumberish =  string | number |  bigint | BigNumber | ArrayLike<number>
  type address = string;
  const msg: msg
}