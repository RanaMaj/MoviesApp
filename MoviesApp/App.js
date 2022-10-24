import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './src/screens/HomeScreen'
import { AppProvider } from './src/context/AppContext'
import { View, Text } from 'react-native'
import MoviesDetailes from './src/screens/MoviesDetailes'
import BotttomeNavigation from './src/Navigation/BottomeNavigation'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <AppProvider>
      <NavigationContainer>
        <BotttomeNavigation>

        </BotttomeNavigation>
        {/* <Stack.Navigator>
          <Stack.Screen name='Home' component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name='Movies' component={MoviesDetailes} options={{ headerShown: false }} />
        </Stack.Navigator> */}
      </NavigationContainer>
    </AppProvider>
  );
}

export default App
