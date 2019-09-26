"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by beilunyang on 2018/3/27
 */
const react_1 = __importDefault(require("react"));
const Toast_1 = __importDefault(require("./Toast"));
const react_native_root_view_1 = __importDefault(require("react-native-root-view"));
const show = (content, options = {}) => {
    const { icon, type, duration, position, onClose, style, mask, } = options;
    let id = 0;
    const animationEnd = () => {
        react_native_root_view_1.default.remove(id);
    };
    id = react_native_root_view_1.default.set(react_1.default.createElement(Toast_1.default, { icon: icon, type: type, style: style, content: content, duration: duration, position: position, onClose: onClose, mask: mask, animationEnd: animationEnd, key: Date.now() + Math.random() }));
    return id;
};
exports.default = {
    LONG: 3500,
    SHORT: 2000,
    success(content, options = {}) {
        const { duration, position, onClose, style, mask, } = options;
        return show(content, {
            type: 'success',
            duration,
            position,
            onClose,
            style,
            mask,
        });
    },
    fail(content, options = {}) {
        const { duration, position, onClose, style, mask, } = options;
        return show(content, {
            type: 'fail',
            duration,
            position,
            onClose,
            style,
            mask,
        });
    },
    warn(content, options = {}) {
        const { duration, position, onClose, style, mask, } = options;
        return show(content, {
            type: 'warn',
            duration,
            position,
            onClose,
            style,
            mask,
        });
    },
    loading(content, options = {}) {
        const { duration, position, onClose, style, mask, } = options;
        return show(content, {
            type: 'loading',
            duration,
            position,
            onClose,
            style,
            mask,
        });
    },
    hide(id) {
        react_native_root_view_1.default.remove(id);
    },
    show,
};
