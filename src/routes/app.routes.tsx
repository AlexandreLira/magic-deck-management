import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useTheme } from 'styled-components/native';

import { DeckScreen } from '../screens/Deck';
import { HomeScreen } from '../screens/Home';
import { SearchScreen } from '../screens/Search';
import { Details } from '../screens/Details';


const Stack = createNativeStackNavigator();
const { Navigator, Screen } = createBottomTabNavigator();


export function HomeTab() {
    const { colors, fonts } = useTheme()
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: colors.main,
                tabBarInactiveTintColor: colors.text,
                tabBarLabelStyle: {
                    fontFamily: fonts.bold
                }
            }}
        >
            <Screen
                name='Decks'
                component={HomeScreen}
                options={{
                    tabBarIcon: (({ size, color }) => (
                        <MaterialCommunityIcons name="cards" size={size} color={color} />
                    ))
                }} />
            <Screen
                name='Pesquisar'
                component={SearchScreen}
                options={{
                    tabBarIcon: (({ size, color }) => (
                        <Ionicons name="search" size={size} color={color} />
                    ))
                }}


            />
        </Navigator>
    );
}


export function AppRoutes() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Home" component={HomeTab} />
            <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
    )

}
