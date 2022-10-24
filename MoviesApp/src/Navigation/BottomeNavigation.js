import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen'
import { AppProvider } from '../src/context/AppContext'
import MoviesDetailes from '../screens/MoviesDetailes'

const Tab = createBottomTabNavigator();

const BotttomeNavigation = () => {
    return (
        <AppProvider>
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name='Home' component={HomeScreen} options={{ headerShown: false }} />
                    <Tab.Screen name='Movies' component={MoviesDetailes} options={{ headerShown: false }} />
                </Tab.Navigator>
            </NavigationContainer>
        </AppProvider>
    );
}

export default BotttomeNavigation
