/**
 * Created by beilunyang on 2018/3/27
 */
import React from 'react';
import { IBaseToastOptions, IShowToastOptions } from './propsType';
declare const _default: {
    LONG: number;
    SHORT: number;
    success(content: string | React.ReactElement<any>, options?: IBaseToastOptions): null;
    fail(content: string | React.ReactElement<any>, options?: IBaseToastOptions): null;
    warn(content: string | React.ReactElement<any>, options?: IBaseToastOptions): null;
    loading(content: string | React.ReactElement<any>, options?: IBaseToastOptions): null;
    hide(id?: number | undefined): void;
    show: (content: string | React.ReactElement<any>, options?: IShowToastOptions) => null;
};
export default _default;
