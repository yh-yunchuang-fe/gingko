/**
 * Created by beilunyang on 2018/3/27
 */
import React from 'react';
import { IBaseToastOptions, IShowToastOptions } from './propsType';
declare const _default: {
    LONG: number;
    SHORT: number;
    success(content: string | React.ReactElement<any>, { duration, position, onClose, style, mask, }?: IBaseToastOptions): number;
    fail(content: string | React.ReactElement<any>, { duration, position, onClose, style, mask, }?: IBaseToastOptions): number;
    warn(content: string | React.ReactElement<any>, { duration, position, onClose, style, mask, }?: IBaseToastOptions): number;
    loading(content: string | React.ReactElement<any>, { duration, position, onClose, style, mask, }?: IBaseToastOptions): number;
    hide(id?: number | undefined): void;
    show: (content: string | React.ReactElement<any, string | React.JSXElementConstructor<any>>, { icon, type, duration, position, onClose, style, mask, }?: IShowToastOptions) => number;
};
export default _default;
