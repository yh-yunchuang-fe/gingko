"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const index_1 = __importDefault(require("./style/index"));
const { width } = react_native_1.Dimensions.get('window');
class Grid extends react_1.default.Component {
    getFlexItemStyle() {
        const { columnNum = 3, blankWidth = 0 } = this.props;
        return {
            width: (width - blankWidth * 2) / columnNum,
            height: (width - blankWidth * 2) / columnNum
        };
    }
    renderItem(item, index) {
        const { renderItem } = this.props;
        if (renderItem) {
            return renderItem(item, index);
        }
        else {
            const icon = react_1.default.isValidElement(item.icon) ?
                item.icon : (<react_native_1.Image source={{ uri: item.icon }} style={index_1.default.icon}/>);
            return (<react_native_1.View style={index_1.default.gridItem}>
                    {icon}
                    <react_native_1.Text style={index_1.default.text}>{item.text}</react_native_1.Text>
                </react_native_1.View>);
        }
    }
    render() {
        const { data, hasLine, onClick, itemStyle, noWrap, buildItem, blankWidth = 0 } = this.props;
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
                    let paramItem = Object.assign({}, item);
                    if (typeof buildItem === 'function') {
                        paramItem = buildItem(paramItem);
                    }
                    arr.push(<react_native_1.TouchableOpacity key={j} style={[
                            index_1.default.gridItem,
                            { borderLeftWidth: hasLine && j !== 0 ? 1 : 0 },
                            flexItemStyle,
                            itemStyle
                        ]} onPress={() => onClick && onClick(paramItem, index)}>
                            {this.renderItem(item, index)}
                        </react_native_1.TouchableOpacity>);
                }
                else {
                    arr.push(<react_native_1.View key={j} style={[
                            index_1.default.gridItem,
                            { borderLeftWidth: hasLine && j !== 0 ? 1 : 0 },
                            flexItemStyle,
                            itemStyle
                        ]}/>);
                }
            }
            const boxBorderStyle = {
                borderTopWidth: hasLine && !noWrap && i === 0 ? 1 : 0,
                borderBottomWidth: hasLine ? (noWrap && i === rowCount - 1 ? 0 : 1) : 0,
            };
            rowsArr.push(<react_native_1.View key={i} style={[index_1.default.gridRow, boxBorderStyle]}>
                    {arr}
                </react_native_1.View>);
        }
        return (<react_native_1.View style={[index_1.default.gridContainer, { paddingHorizontal: blankWidth }]}>
                {rowsArr}
            </react_native_1.View>);
    }
}
exports.default = Grid;
Grid.defaultProps = {
    data: [],
    columnNum: 3,
    hasLine: true,
    noWrap: false,
    blankWidth: 0,
    itemStyle: {},
    onClick: () => { }
};
//# sourceMappingURL=index.js.map