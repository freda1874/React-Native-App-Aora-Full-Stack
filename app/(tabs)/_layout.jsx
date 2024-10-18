import { View, Image, Text } from 'react-native'
import React from 'react'
import { Redirect, Tabs } from "expo-router";
import icons from '../../constants/icons';
import { StatusBar } from "expo-status-bar";

const TabIcon = ({ icon, color, name, focused }) => {
    return (
        <View className="flex items-center justify-center gap-1">
            <Image
                source={icon}
                resizeMode="contain"
                tintColor={color}
                className="w-4 h-4"
            />
            <Text
                className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`} style={{ color: color }}
            >
                {name}
            </Text>

        </View>
    );
};

const TabLayout = () => {
    return (
        <>
            <Tabs
                screenOptions={{
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: '#FFA001',
                    tabBarInactiveTintColor: "#CDCDE0",
                    tabBarStyle: {
                        backgroundColor: "#161622",
                        borderTopWidth: 1,
                        borderTopColor: "#232533",
                        height: 84,
                    },
                }}>
                <Tabs.Screen
                    name="home"
                    options={{
                        title: "Home",
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.home}
                                color={color}
                                name="Home"
                                focused={focused}
                            />
                        ),
                    }}
                />

                <Tabs.Screen
                    name="bookmark"
                    options={{
                        title: "BookMark",
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon icon={icons.bookmark}
                                color={color}
                                name="BookMark"
                                focused={focused} />
                        )
                    }} />

                <Tabs.Screen
                    name="create"
                    options={{
                        title: "Create",
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon icon={icons.plus}
                                color={color}
                                name="Create"
                                focused={focused} />
                        )
                    }} />
                <Tabs.Screen
                    name="profile"
                    options={{
                        title: "Profile",
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon icon={icons.profile}
                                color={color}
                                name="Profile"
                                focused={focused} />
                        )
                    }} />
            </Tabs>
            <StatusBar backgroundColor="#161622" style="light" />
        </>
    )
}

export default TabLayout