import React from 'react'
import { StackNavigator } from 'react-navigation'
import routes from './src/routes'
import Home from './src/Home'

const getOptions = title => ({
    title,
    headerStyle: {
        backgroundColor: '#24A8E8',
    },
    headerTintColor: 'white',
});


const scenes = {
    Home: {
        screen: Home,
        navigationOptions: getOptions('GingoKo')
    }
};

routes.forEach((component) => {
   scenes[component.title] = {
       screen: component.screen,
       navigationOptions: getOptions(component.title)
   }
});


const App = StackNavigator(scenes);

export default App;

