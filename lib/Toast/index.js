"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const show = (content, options = {}) => {
    const { icon, type, duration, position, onClose, style, mask, } = options;
    const id = 0;
    const animationEnd = () => {
    };
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
        // rootView.remove(id);
    },
    show,
};
//# sourceMappingURL=index.js.map