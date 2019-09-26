import React from 'react'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
// import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';
import routes from './src/routes'
import Home from './src/Home'

const getOptions = title => ({
    title,
});


const scenes = {
    Home: {
        screen: Home,
        navigationOptions: getOptions('GingKo')
    }
};

routes.forEach((component) => {
   scenes[component.title] = {
       screen: component.screen,
       navigationOptions: getOptions(component.title)
   }
});


const App = createAppContainer(createStackNavigator(scenes, {
    initialRouteName: 'Home',
    // 让安卓也支持push 动画 从左向右滑，关闭窗口
    headerMode: 'screen',
    /**
     * 使用StackNavigator跳转页面时，react-navigation根据平台的不同内置了相应的跳转动画。
     * 内置的跳转动画在react-navigation/src/views/CardStack/CardStackStyleInterpolator中，共三种。
     * forHorizontal:从右向左进入、
     * forVertical:从下向上进入、
     * forFadeFromBottomAndroid:从底部淡出。
     * 关于修改默认的跳转动画或者自定义动画效果，以下给出两个场景。
     * @returns {{screenInterpolator: forHorizontal}}
     */
    // transitionConfig:()=>({
    //     // 只要修改最后的forVertical就可以实现不同的动画了。
    //     screenInterpolator: CardStackStyleInterpolator.forHorizontal,
    // }),
    navigationOptions: {
        gesturesEnabled: true,
        animationEnabled: true,
        headerStyle: {
            backgroundColor: '#24A8E8',
            flexDirection: 'row'
        },
        headerTitleStyle: {
            fontSize: 18,
            fontWeight: 'normal',
            width: '80%'
        },
        headerTintColor: 'white',
    }
}));

export default App;

