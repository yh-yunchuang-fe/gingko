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
const DefaultTabBar_1 = __importDefault(require("./DefaultTabBar"));
const index_1 = __importDefault(require("./style/index"));
class Tabs extends react_1.default.Component {
    // isTabVertical: boolean = true;
    constructor(props) {
        super(props);
        this.nextCurrentTab = 0;
        this.tabCache = {};
        this.isTabVertical = (tabBarPosition = (this.props.tabBarPosition)) => tabBarPosition === 'left';
        this.getSubElements = () => {
            const { children } = this.props;
            const subElements = {};
            return (defaultPrefix = '$i$-', allPrefix = '$ALL$') => {
                if (Array.isArray(children)) {
                    children.forEach((child, index) => {
                        if (child.key) {
                            subElements[child.key] = child;
                        }
                        subElements[`${defaultPrefix}${index}`] = child;
                    });
                }
                else if (children) {
                    subElements[allPrefix] = children;
                }
                return subElements;
            };
        };
        console.log('this.props:', props);
        this.state = {
            currentTab: this.getTabIndex(props)
        };
        this.nextCurrentTab = this.state.currentTab;
        const tabBarPosition = this.props.tabBarPosition;
        // this.isTabVertical = tabBarPosition === 'left'
    }
    getTabIndex(props) {
        const { page, initialPage, tabs } = props;
        const param = (page !== undefined ? page : initialPage) || 0;
        let index = 0;
        if (typeof param === 'string') {
            tabs.forEach((t, i) => {
                if (t.key === param) {
                    index = i;
                }
            });
        }
        else {
            index = param || 0;
        }
        return index < 0 ? 0 : index;
    }
    goToTab(index) {
        if (this.nextCurrentTab === index) {
            return false;
        }
        this.nextCurrentTab = index;
        const { onChange, tabs, page } = this.props;
        if (index > 0 && index < tabs.length) {
            onChange && onChange(tabs[index], index);
            if (page !== undefined) {
                return false;
            }
        }
        this.setState({
            currentTab: index,
        });
        return true;
    }
    getTabBarBaseProps() {
        const { currentTab } = this.state;
        const { tabs, onTabClick, tabBarFillColor, tabBarActionFillColor, tabBarActiveTextColor, tabBarInactiveTextColor, tabBarPosition, tabBarTextStyle, } = this.props;
        return {
            activeTab: currentTab,
            tabs,
            onTabClick,
            goToTab: this.goToTab.bind(this),
            tabBarFillColor,
            tabBarActionFillColor,
            tabBarActiveTextColor,
            tabBarInactiveTextColor,
            tabBarPosition,
            tabBarTextStyle,
        };
    }
    getSubElement(tab, index, subElements, defaultPrefix = '$i$-', allPrefix = '$ALL$') {
        const key = tab.key || `${defaultPrefix}${index}`;
        const elements = subElements(defaultPrefix, allPrefix);
        let component = elements[key] || elements[allPrefix];
        if (component instanceof Function) {
            component = component(tab, index);
        }
        return component || null;
    }
    renderTabBar(tabBarProps, renderTabBar) {
        if (renderTabBar) {
            return renderTabBar(tabBarProps);
        }
        else {
            return <DefaultTabBar_1.default {...tabBarProps}/>;
        }
    }
    renderContent(getSubElements = this.getSubElements()) {
        const { tabs, children } = this.props;
        const { currentTab = 0 } = this.state;
        const tab = tabs[currentTab];
        // const key = tab.key || `tab_${currentTab}`;
        const node = this.tabCache[currentTab] || this.getSubElement(tab, currentTab, getSubElements);
        return node;
        // return (
        //     <ScrollView
        //         style={{flex: 1, backgroundColor: 'skyblue'}}
        //         key="$content"
        //         horizontal={!this.isTabVertical()}
        //         showsHorizontalScrollIndicator={false}
        //         showsVerticalScrollIndicator={false}
        //         scrollsToTop={false}
        //     >
        //         { node }
        //         {/*{*/}
        //             {/*tabs.map((tab, index) => {*/}
        //                 {/*const key = tab.key || `tab_${index}`;*/}
        //                 {/*this.tabCache[index] = this.getSubElement(tab, index, getSubElements);*/}
        //
        //                 {/*return (*/}
        //                     {/*<View key={key}>*/}
        //                         {/*{this.tabCache[index]}*/}
        //                     {/*</View>*/}
        //                 {/*)*/}
        //             {/*})*/}
        //         {/*}*/}
        //     </ScrollView>
        // )
    }
    render() {
        const { style, renderTabBar } = this.props;
        const tabBarProps = this.getTabBarBaseProps();
        return (<react_native_1.View style={Object.assign({ flexDirection: this.isTabVertical() ? 'row' : 'column' }, style)}>
                {this.renderTabBar(tabBarProps, renderTabBar)}
                <react_native_1.View style={Object.assign({}, index_1.default.Tabs.content)}>
                    {this.renderContent()}
                </react_native_1.View>
            </react_native_1.View>);
    }
}
exports.default = Tabs;
Tabs.DefaultTabBar = DefaultTabBar_1.default;
Tabs.defaultProps = {
    tabBarPosition: 'left',
    initialPage: 0,
    tabs: [],
    style: {}
};
//# sourceMappingURL=Tabs.js.map