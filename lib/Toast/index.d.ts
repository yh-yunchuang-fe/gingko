/**
 * Created by beilunyang on 2018/3/27
 */
import React from 'react';
import { IBaseToastOptions, IShowToastOptions } from './propsType';
declare const _default: {
    LONG: number;
    SHORT: number;
    success(content: string | React.ReactElement<any>, options?: IBaseToastOptions): number;
    fail(content: string | React.ReactElement<any>, options?: IBaseToastOptions): number;
    warn(content: string | React.ReactElement<any>, options?: IBaseToastOptions): number;
    loading(content: string | React.ReactElement<any>, options?: IBaseToastOptions): number;
    hide(id?: number | undefined): void;
    show: (content: string | React.ReactElement<any, string | React.JSXElementConstructor<any>>, options?: IShowToastOptions) => number;
};
export default _default;
