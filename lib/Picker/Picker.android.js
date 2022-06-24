"use strict";
/**
 * Created by beilunyang on 2018/3/2
 *
 * modify from https://github.com/react-component/m-picker/blob/master/src/NativePicker.android.tsx
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const PickerMixin_android_1 = __importDefault(require("./PickerMixin.android"));
const Picker_android_1 = __importDefault(require("./style/Picker.android"));
const style_1 = __importDefault(require("@src/style"));
class Picker extends react_1.default.Component {
    constructor() {
        super(...arguments);
        this.itemHeight = 0;
        this.itemWidth = 0;
        this.onItemLayout = (e) => {
            const { height, width } = e.nativeEvent.layout;
            if (this.itemWidth !== width) {
                this.itemWidth = width;
                this.indicatorRef.setNativeProps({
                    style: [
                        Picker_android_1.default.indicator,
                        {
                            top: height * 2,
                            height,
                            width,
                        },
                    ],
                });
            }
            if (this.itemHeight !== height) {
                this.itemHeight = height;
                this.scrollerRef.setNativeProps({
                    style: {
                        height: height * 5,
                    },
                });
                this.contentRef.setNativeProps({
                    style: {
                        paddingTop: height * 2,
                        paddingBottom: height * 2,
                    },
                });
                // i do no know why!...
                setTimeout(() => {
                    this.props.select(this.props.selectedValue, this.itemHeight, this.scrollTo);
                }, 0);
            }
        };
        this.scrollTo = (y) => {
            this.scrollerRef.scrollTo({
                y,
                animated: false,
            });
        };
        this.fireValueChange = (selectedValue) => {
            if (this.props.selectedValue !== selectedValue && this.props.onValueChange) {
                this.props.onValueChange(selectedValue);
            }
        };
        this.onScroll = (e) => {
            const { y } = e.nativeEvent.contentOffset;
            this.clearScrollBuffer();
            this.scrollBuffer = setTimeout(() => {
                this.clearScrollBuffer();
                this.props.doScrollingComplete(y, this.itemHeight, this.fireValueChange);
            }, 100);
        };
    }
    componentDidUpdate() {
        this.props.select(this.props.selectedValue, this.itemHeight, this.scrollTo);
    }
    componentWillUnmount() {
        this.clearScrollBuffer();
    }
    clearScrollBuffer() {
        if (this.scrollBuffer) {
            clearTimeout(this.scrollBuffer);
        }
    }
    render() {
        const { children, selectedValue, itemStyle, style, currentType } = this.props;
        const items = react_1.default.Children.map(children, (item, index) => {
            const totalStyle = [Picker_android_1.default.itemText];
            if (selectedValue === item.props.value) {
                totalStyle.push(Picker_android_1.default.selectedItemText);
            }
            totalStyle.push(itemStyle);
            return (<react_native_1.View ref={(el) => this[`item${index}`] = el} onLayout={index === 0 ? this.onItemLayout : () => { }} key={item.key}>
                    <react_native_1.Text style={totalStyle} numberOfLines={1}>{item.props.label}</react_native_1.Text>
                </react_native_1.View>);
        });
        const bgRadius = currentType === 'first' ? {
            borderTopLeftRadius: style_1.default.radius_picker_item,
            borderBottomLeftRadius: style_1.default.radius_picker_item,
        } : currentType === 'last' ? {
            borderTopRightRadius: style_1.default.radius_picker_item,
            borderBottomRightRadius: style_1.default.radius_picker_item,
        } : currentType === 'center' ? {} : {
            borderRadius: style_1.default.radius_picker_item
        };
        return (<react_native_1.View style={style}>
                <react_native_1.View ref={(el) => this.indicatorRef = el} style={[Picker_android_1.default.indicator, bgRadius]} pointerEvents='box-none'/>
                <react_native_1.ScrollView style={Picker_android_1.default.scrollView} ref={(el) => this.scrollerRef = el} onScroll={this.onScroll} showsVerticalScrollIndicator={false} overScrollMode='never'>
                    <react_native_1.View ref={(el) => this.contentRef = el}>
                        {items}
                    </react_native_1.View>
                </react_native_1.ScrollView>
            </react_native_1.View>);
    }
}
exports.default = (0, PickerMixin_android_1.default)(Picker);
//# sourceMappingURL=Picker.android.js.map