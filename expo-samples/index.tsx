import 'react-native-gesture-handler'
import React from 'react'
import Home from './src/Home'
import routes from './src/routes'

import { createStackNavigator } from '@react-navigation/stack'
// import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native'
const Stack = createStackNavigator();

const Samples = () => {
    const navigationRef = useNavigationContainerRef();
    
    return <NavigationContainer ref={navigationRef}>
        <Stack.Navigator>
            <Stack.Screen name={'Gingko'} component={Home} />
            {
                routes.map((item, index) => {
                    return <Stack.Screen key={index} name={item.title} component={item.screen} />
                })
            }
        </Stack.Navigator>
    </NavigationContainer>
}

export default Samples
