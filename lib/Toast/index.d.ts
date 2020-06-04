/**
 * Created by beilunyang on 2018/3/27
 */
import React from 'react';
import { IBaseToastOptions, IShowToastOptions } from './propsType';
declare const _default: {
    LONG: number;
    SHORT: number;
    success(content: string | React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)>) | (new (props: any) => React.Component<any, any, any>)>, options?: IBaseToastOptions): any;
    fail(content: string | React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)>) | (new (props: any) => React.Component<any, any, any>)>, options?: IBaseToastOptions): any;
    warn(content: string | React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)>) | (new (props: any) => React.Component<any, any, any>)>, options?: IBaseToastOptions): any;
    loading(content: string | React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)>) | (new (props: any) => React.Component<any, any, any>)>, options?: IBaseToastOptions): any;
    hide(): void;
    show: (content: string | React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)>) | (new (props: any) => React.Component<any, any, any>)>, options?: IShowToastOptions) => any;
};
export default _default;
