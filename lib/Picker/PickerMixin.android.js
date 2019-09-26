"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by beilunyang on 2018/3/2
 *
 * modify from https://github.com/react-component/m-picker/blob/master/src/PickerMixin.tsx
 */
const react_1 = __importDefault(require("react"));
function default_1(ComposedComponent) {
    return class extends react_1.default.Component {
        constructor() {
            super(...arguments);
            this.select = (value, itemHeight, scrollTo) => {
                const children = react_1.default.Children.toArray(this.props.children);
                for (let i = 0, len = children.length; i < len; i++) {
                    if (children[i].props.value === value) {
                        this.selectByIndex(i, itemHeight, scrollTo);
                        return;
                    }
                }
                this.selectByIndex(0, itemHeight, scrollTo);
            };
            this.doScrollingComplete = (top, itemHeight, fireValueChange) => {
                const children = react_1.default.Children.toArray(this.props.children);
                const index = this.computeChildIndex(top, itemHeight, children.length);
                const child = children[index];
                if (child) {
                    fireValueChange(child.props.value);
                }
                else if (console.warn) {
                    console.warn('child not found', children, index);
                }
            };
        }
        selectByIndex(index, itemHeight, zscrollTo) {
            if (index < 0 || index >= react_1.default.Children.count(this.props.children) || !itemHeight) {
                return;
            }
            zscrollTo(index * itemHeight);
        }
        computeChildIndex(top, itemHeight, childrenLength) {
            let index = top / itemHeight;
            const floor = Math.floor(index);
            if (index - floor > 0.5) {
                index = floor + 1;
            }
            else {
                index = floor;
            }
            return Math.min(index, childrenLength - 1);
        }
        render() {
            return (react_1.default.createElement(ComposedComponent, Object.assign({}, this.props, { doScrollingComplete: this.doScrollingComplete, computeChildIndex: this.computeChildIndex, select: this.select })));
        }
    };
}
exports.default = default_1;
