"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by wudi on 2022/04/02.
 */
const react_1 = __importStar(require("react"));
const style_1 = __importDefault(require("./style"));
const react_native_1 = require("react-native");
const react_native_tab_view_1 = require("react-native-tab-view");
const style_2 = __importDefault(require("@src/style"));
const { width } = react_native_1.Dimensions.get('screen');
function Tabs(props) {
    const { tabStyle = {}, tabBarStyle = {}, tabBarLabelStyle = {}, tabBarIndicatorStyle = {}, renderScene = null, 
    // renderTabBar = null,
    // renderLabel = null,
    swipeEnabled = false, scrollEnabled = false, activeColor = style_2.default.color_tabItem_font_selected, inactiveColor = style_2.default.color_tabItem_font_unselect, routes = [
        { key: '1', title: `未选` },
        { key: '2', title: `已选` },
        { key: '3', title: `未选` },
    ] } = props;
    const [tabIndex, setTabIndex] = (0, react_1.useState)(props.hasOwnProperty('tabIndex') ? props.tabIndex : 0);
    const onIndexChange = (value) => {
        setTabIndex(value);
        props.onIndexChange && props.onIndexChange(value);
    };
    const renderLabel = ({ route, focused, color }) => {
        const fontW = !!(react_native_1.Platform.OS === 'ios' && focused) ? { fontWeight: '600' } : {};
        return <react_native_1.Text style={[style_1.default.labelText, fontW, { color }]}>
            {route.title}
        </react_native_1.Text>;
    };
    const renderTabBar = (props) => {
        // 设置indicator 宽度 居中
        const tabWidth = (tabStyle === null || tabStyle === void 0 ? void 0 : tabStyle.width) || (width / routes.length);
        const left = (tabWidth - 24) / 2;
        return <react_native_tab_view_1.TabBar {...props} scrollEnabled={scrollEnabled} tabStyle={tabStyle} style={[style_1.default.tabBarStyle, tabBarStyle]} labelStyle={[style_1.default.tabBarLabelStyle, tabBarLabelStyle]} activeColor={activeColor} inactiveColor={inactiveColor} indicatorStyle={[style_1.default.tabBarIndicatorStyle, { left }, tabBarIndicatorStyle]} renderLabel={renderLabel}/>;
    };
    return (<react_native_tab_view_1.TabView navigationState={{
            index: tabIndex,
            routes
        }} swipeEnabled={swipeEnabled} // 手势滑动切换
     renderScene={renderScene} onIndexChange={onIndexChange} renderTabBar={renderTabBar}/>);
}
exports.default = Tabs;
//# sourceMappingURL=index.js.map