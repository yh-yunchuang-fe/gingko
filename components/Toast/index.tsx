/**
 * Created by beilunyang on 2018/3/27
 */
import React from 'react';
import Toast from './Toast';
import rootView from 'react-native-root-view';
import {
    IBaseToastOptions,
    IShowToastOptions,
} from './propsType';

const show = (content: string | React.ReactElement<any>, options: IShowToastOptions = {}) => {
    const {
        icon,
        type,
        duration,
        position,
        onClose,
        style,
        mask,
    } = options;
    let id:number = 0;
    const animationEnd = () => {
        rootView.remove(id);
    };
    id = rootView.set(
        <Toast
            icon={icon}
            type={type}
            style={style}
            content={content}
            duration={duration}
            position={position}
            onClose={onClose}
            mask={mask}
            animationEnd={animationEnd}
            key={Date.now() + Math.random()}
        />
    );
    return id;
};

export default {
    LONG: 3500,
    SHORT: 2000,
    success(content: string | React.ReactElement<any>, options: IBaseToastOptions = {}) {
        const {
            duration,
            position,
            onClose,
            style,
            mask,
        } = options as any;
        return show(content, {
            type: 'success',
            duration,
            position,
            onClose,
            style,
            mask,
        });
    },
    fail(content: string | React.ReactElement<any>, options: IBaseToastOptions = {}) {
        const {
            duration,
            position,
            onClose,
            style,
            mask,
        } = options as any;
        return show(content, {
            type: 'fail',
            duration,
            position,
            onClose,
            style,
            mask,
        });
    },
    warn(content: string | React.ReactElement<any>, options: IBaseToastOptions = {}) {
        const {
            duration,
            position,
            onClose,
            style,
            mask,
        } = options as any;
        return show(content, {
            type: 'warn',
            duration,
            position,
            onClose,
            style,
            mask,
        });
    },
    loading(content: string | React.ReactElement<any>, options: IBaseToastOptions = {}) {
        const {
            duration,
            position,
            onClose,
            style,
            mask,
        } = options as any;
        return show(content, {
            type: 'loading',
            duration,
            position,
            onClose,
            style,
            mask,
        });
    },
    hide(id?: number) {
        rootView.remove(id);
    },
    show,
};
