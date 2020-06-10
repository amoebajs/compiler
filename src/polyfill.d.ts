// export declare function Input(): any;
// export declare function Input(defaultValue?: any): any;
// export declare function InputWithType(type: "string" | "number" | "boolean"): any;
// export declare function InputWithType(type: "string" | "number" | "boolean", defaultValue?: any): any;

// export function Extends(): any;
import * as React from "react";

export interface IComponentType {
  name: string;
  displayName: string;
  version: string;
  children: any;
}

export interface IGroupType {
  name: string;
  displayName: string;
  description: string;
  children: any;
}

export interface IInputType extends IGroupType {
  type: "boolean" | "string" | "number";
  map: {
    key?: any;
    value?: any;
  };
}

export interface IExtendsType<K> {
  name: K;
  module: any;
  children: any;
}

export interface IMethodType {
  name: string;
  override: "super" | true | false;
  children: any;
}

export declare function Component(props: Partial<IComponentType>): React.ReactElement;
export declare function Group(props: Partial<IGroupType>): React.ReactElement;
export declare function Input(props: Partial<IInputType>): React.ReactElement;
export declare function Extends(props: Partial<IExtendsType<K>>): React.ReactElement;
export declare function Method(props: Partial<IMethodType>): React.ReactElement;
