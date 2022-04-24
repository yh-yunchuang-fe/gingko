"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by wudi on 2022/04/02.
 */
const react_1 = __importDefault(require("react"));
const style_1 = __importDefault(require("./style"));
const react_native_1 = require("react-native");
const react_native_tab_view_1 = require("react-native-tab-view");
const style_2 = __importDefault(require("@src/style"));
const { width } = react_native_1.Dimensions.get('screen');
class Tabs extends react_1.default.Component {
    constructor() {
        super(...arguments);
        this.state = {
            tabIndex: this.props.hasOwnProperty('tabIndex') ? this.props.tabIndex : 0
        };
        this.onIndexChange = (value) => {
            const { onIndexChange } = this.props;
            this.setState({
                tabIndex: value
            });
            onIndexChange && onIndexChange(value);
        };
        this.renderLabel = ({ route, focused, color }) => {
            const fw = react_native_1.Platform.OS === 'ios' && focused;
            return <react_native_1.Text style={[style_1.default.labelText, fw && {
                        fontWeight: style_2.default.font_tabItem_font_weight_selected
                    }, { color }]}>
            {route.title}
        </react_native_1.Text>;
        };
        this.renderTabBar = (props) => {
            const { tabBarIndicatorStyle, tabBarStyle, tabBarLabelStyle, tabStyle, scrollEnabled, activeColor, inactiveColor, routes } = this.props;
            // 设置indicator 宽度 居中
            const tabWidth = (tabStyle === null || tabStyle === void 0 ? void 0 : tabStyle.width) || (width / routes.length);
            const left = (tabWidth - 24) / 2;
            return <react_native_tab_view_1.TabBar {...props} scrollEnabled={scrollEnabled} tabStyle={tabStyle} style={[style_1.default.tabBarStyle, tabBarStyle]} labelStyle={[style_1.default.tabBarLabelStyle, tabBarLabelStyle]} activeColor={activeColor} inactiveColor={inactiveColor} indicatorStyle={[style_1.default.tabBarIndicatorStyle, { left }, tabBarIndicatorStyle]} renderLabel={this.renderLabel}/>;
        };
    }
    render() {
        const { routes, swipeEnabled, renderScene } = this.props;
        const { tabIndex } = this.state;
        return (<react_native_tab_view_1.TabView navigationState={{
                index: tabIndex,
                routes
            }} swipeEnabled={swipeEnabled} // 手势滑动切换
         renderScene={renderScene} onIndexChange={this.onIndexChange} renderTabBar={this.renderTabBar}/>);
    }
}
exports.default = Tabs;
Tabs.defaultProps = {
    tabStyle: {},
    tabBarStyle: {},
    tabBarLabelStyle: {},
    tabBarIndicatorStyle: {},
    onIndexChange: () => { },
    renderScene: null,
    renderTabBar: null,
    renderLabel: null,
    swipeEnabled: false,
    scrollEnabled: false,
    activeColor: style_2.default.color_tabItem_font_selected,
    inactiveColor: style_2.default.color_tabItem_font_unselect,
    tabIndex: 0,
    routes: [
        { key: '1', title: `未选` },
        { key: '2', title: `已选` },
        { key: '3', title: `未选` },
    ]
};
//# sourceMappingURL=index.js.map