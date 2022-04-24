"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @author zhangyi
 * @date 2018/2/28
 */
const react_1 = __importDefault(require("react"));
const Dialog_1 = __importDefault(require("../Dialog"));
const style_1 = __importDefault(require("./style"));
const react_native_1 = require("react-native");
const __1 = require("../");
function Popup(props) {
    const { visible = false, animateAppear = true, animationDuration = 300, maskClosable = true, onClose = () => { }, onChange = () => { }, onAnimationEnd = () => { }, style = {}, numberOfLines = 2, children, type = 'none', title, // '主标题',
    hint, // '这是提供二行注释, 通过信息澄清的方式，这是提供一行或二行注释'
     } = props;
    console.log;
    return (<Dialog_1.default transparent visible={visible} animationType='slide-up' animateAppear={animateAppear} animationDuration={animationDuration} onClose={onClose} maskClosable={maskClosable} onAnimationEnd={onAnimationEnd} style={[style, style_1.default.container]}>
            {(hint || title) && <react_native_1.View style={style_1.default.hintWrap}>
                {title && type === 'close' && <react_native_1.View style={[style_1.default.headerWrap, style_1.default.closeHeaderWrap]}>
                    <react_native_1.View style={{ width: 30 }}/>
                    <react_native_1.View style={style_1.default.titleWrap}>
                        <react_native_1.Text style={style_1.default.titleText}>{title}</react_native_1.Text>
                        {hint && <react_native_1.Text style={style_1.default.hintText} numberOfLines={numberOfLines}>{hint}</react_native_1.Text>}
                    </react_native_1.View>
                    <react_native_1.TouchableOpacity style={{ width: 30 }} onPress={onClose}>
                        <__1.Icon name='close' color='#9E9E9E' size={12}/>
                    </react_native_1.TouchableOpacity> 
                </react_native_1.View>}
                {title && type === 'cancel' && <react_native_1.View style={[style_1.default.headerWrap, style_1.default.cancelHeaderWrap]}>
                    <react_native_1.TouchableOpacity onPress={onClose}>
                        <react_native_1.Text style={style_1.default.cancelText}>取消</react_native_1.Text>
                    </react_native_1.TouchableOpacity>
                    <react_native_1.View style={style_1.default.titleWrap}>
                        <react_native_1.Text style={style_1.default.titleText}>{title}</react_native_1.Text>
                        {hint && <react_native_1.Text style={style_1.default.hintText} numberOfLines={numberOfLines}>{hint}</react_native_1.Text>}
                    </react_native_1.View>
                    <react_native_1.TouchableOpacity onPress={onChange}>
                        <react_native_1.Text style={style_1.default.finishText}>完成</react_native_1.Text>
                    </react_native_1.TouchableOpacity>
                </react_native_1.View>}
                
            </react_native_1.View>}
            <react_native_1.ScrollView>
                {children}
            </react_native_1.ScrollView>
        </Dialog_1.default>);
}
exports.default = Popup;
//# sourceMappingURL=index.js.map