import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import HomeScreen from './pages/Home';
import DetailScreen from './pages/Details';


const Routes = () => {
    return (
        <Stack.Navigator screenOptions={{cardStyle: { backgroundColor: '#fff' }}}>
            <Stack.Screen 
                name="Home" 
                component={HomeScreen} 
                options={{ headerShown: false,
                    animationEnabled: false, }}    
            />
            <Stack.Screen 
                name="Details" 
                component={DetailScreen} 
                options={{ headerShown: false,
                    animationEnabled: false, }} 
            />

        </Stack.Navigator>
    );
};

export default Routes;