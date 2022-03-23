import 'react-native-gesture-handler'
import React from 'react'
import Home from './src/Home'
import routes from './src/routes'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
const Root = createStackNavigator()

const Samples = () => {
    return <NavigationContainer>
        <Root.Navigator>
            <Root.Screen name={'Gingko'} component={Home} />
            {
                routes.map((item, index) => {
                    return <Root.Screen key={index} name={item.title} component={item.screen} />
                })
            }
        </Root.Navigator>
    </NavigationContainer>
}

export default Samples
