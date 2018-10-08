"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @author zhangyi
 * @date 2018/4/9
 */
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const index_1 = __importDefault(require("./style/index"));
class DefaultTabBar extends react_1.default.Component {
    constructor(props) {
        super(props);
        this._scrollView = null;
        this.isTabVertical = (tabBarPosition = (this.props.tabBarPosition)) => tabBarPosition === 'left';
        this.onPress = (index) => {
            const { onTabClick, tabs, goToTab } = this.props;
            onTabClick && onTabClick(tabs[index], index);
            goToTab && goToTab(index);
        };
    }
    renderTab(tab, index) {
        const { tabBarActiveTextColor: activeTextColor, tabBarInactiveTextColor: inactiveTextColor, tabBarTextStyle: textStyle, tabBarFillColor: fillColor, tabBarActionFillColor: activeFillColor, activeTab, renderTab, } = this.props;
        const isTabActive = activeTab === index;
        const textColor = isTabActive ?
            (activeTextColor || index_1.default.TabBar.activeTextColor) :
            (inactiveTextColor || index_1.default.TabBar.inactiveTextColor);
        const bgColor = isTabActive ?
            (activeFillColor || index_1.default.TabBar.activeFillColor) :
            (fillColor || index_1.default.TabBar.fillColor);
        return (react_1.default.createElement(react_native_1.TouchableOpacity, { key: `${tab.title}_${index}`, onPress: () => this.onPress(index) },
            react_1.default.createElement(react_native_1.View, { style: Object.assign({}, index_1.default.TabBar.tab, { backgroundColor: bgColor }) }, renderTab ? renderTab(tab, isTabActive) :
                react_1.default.createElement(react_native_1.Text, { style: Object.assign({ color: textColor }, index_1.default.TabBar.textStyle, textStyle) }, tab.title))));
    }
    render() {
        const { tabs, tabBarFillColor, } = this.props;
        return (react_1.default.createElement(react_native_1.View, { style: Object.assign({}, index_1.default.TabBar.container, { backgroundColor: tabBarFillColor || index_1.default.TabBar.fillColor }) },
            react_1.default.createElement(react_native_1.ScrollView, { ref: (scrollView) => { this._scrollView = scrollView; }, horizontal: !this.isTabVertical(), showsHorizontalScrollIndicator: false, showsVerticalScrollIndicator: false, scrollsToTop: false },
                react_1.default.createElement(react_native_1.View, { style: Object.assign({}, index_1.default.TabBar.tabs, { backgroundColor: tabBarFillColor || index_1.default.TabBar.fillColor }) }, tabs.map((name, index) => {
                    let tab = { title: name };
                    if (tabs.length - 1 >= index) {
                        tab = tabs[index];
                    }
                    return this.renderTab(tab, index);
                })))));
    }
}
DefaultTabBar.defaultProps = {
    tabs: [],
    activeTab: 0,
    tabBarBackgroundColor: '#fff',
    tabBarActiveTextColor: '',
    tabBarInactiveTextColor: '',
    tabBarTextStyle: {},
};
exports.default = DefaultTabBar;
//# sourceMappingURL=DefaultTabBar.js.map