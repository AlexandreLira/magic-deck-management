import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { DeckScreen } from '../screens/Deck';
import { HomeScreen } from '../screens/Home';
import { SearchScreen } from '../screens/Search';
import { useTheme } from 'styled-components/native';


const Stack = createNativeStackNavigator();
const { Navigator, Screen } = createBottomTabNavigator();


export function StackRoutes() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Deck" component={DeckScreen} />
        </Stack.Navigator>
    )
}

export function AppRoutes() {
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
