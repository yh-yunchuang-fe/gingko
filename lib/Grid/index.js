"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const index_1 = __importDefault(require("./style/index"));
const { width, height } = react_native_1.Dimensions.get('window');
class Grid extends react_1.default.Component {
    getFlexItemStyle() {
        const columnNum = this.props.columnNum || 0;
        return {
            width: width / columnNum,
            height: width / columnNum
        };
    }
    renderItem(item, index) {
        const { renderItem } = this.props;
        if (renderItem) {
            return renderItem(item, index);
        }
        else {
            const icon = react_1.default.isValidElement(item.icon) ?
                item.icon : (react_1.default.createElement(react_native_1.Image, { source: { uri: item.icon }, style: index_1.default.icon }));
            return (react_1.default.createElement(react_native_1.View, { style: index_1.default.gridItem },
                icon,
                react_1.default.createElement(react_native_1.Text, { style: index_1.default.text }, item.text)));
        }
    }
    render() {
        const { data, hasLine, onClick, itemStyle } = this.props;
        const columnNum = this.props.columnNum || 0;
        const dataLength = data && data.length || 0;
        const rowCount = Math.ceil(dataLength / columnNum);
        const flexItemStyle = this.getFlexItemStyle();
        const rowsArr = [];
        for (let i = 0; i < rowCount; i++) {
            const arr = [];
            for (let j = 0; j < columnNum; j++) {
                const index = i * columnNum + j;
                if (index < dataLength) {
                    const item = data && data[index] || {};
                    arr.push(react_1.default.createElement(react_native_1.TouchableOpacity, { key: j, style: [
                            index_1.default.gridItem,
                            { borderLeftWidth: hasLine && j !== 0 ? 1 : 0 },
                            flexItemStyle,
                            itemStyle
                        ], onPress: () => onClick && onClick(item, index) }, this.renderItem(item, index)));
                }
                else {
                    arr.push(react_1.default.createElement(react_native_1.View, { key: j, style: [
                            index_1.default.gridItem,
                            { borderLeftWidth: hasLine && j !== 0 ? 1 : 0 },
                            flexItemStyle,
                            itemStyle
                        ] }));
                }
            }
            const boxBorderStyle = {
                borderTopWidth: hasLine && i === 0 ? 1 : 0,
                borderBottomWidth: hasLine ? 1 : 0,
            };
            rowsArr.push(react_1.default.createElement(react_native_1.View, { key: i, style: [index_1.default.gridRow, boxBorderStyle] }, arr));
        }
        return (react_1.default.createElement(react_native_1.View, { style: index_1.default.gridContainer }, rowsArr));
    }
}
Grid.defaultProps = {
    data: [],
    columnNum: 3,
    hasLine: true,
    itemStyle: {},
    onClick: () => { }
};
exports.default = Grid;
//# sourceMappingURL=index.js.map