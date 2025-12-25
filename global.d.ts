export declare interface msg {
  sender: address;
  contract: address;
  call(contract: address, method: string, parameters: any[]): Promise<any>;
  staticCall(
    contract: address,
    method: string,
    parameters?: any[]
  ): Promise<any>;
  delegate(contract: address, method: string, parameters: any[]): Promise<any>;
  staticDelegate(
    contract: address,
    method: string,
    parameters?: any[]
  ): Promise<any>;
}

declare global {
  type address = string;
  const msg: msg;
}
