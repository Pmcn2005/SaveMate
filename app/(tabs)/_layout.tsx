import { View, Text, Image } from 'react-native'
import { Tabs, Redirect } from 'expo-router'
import Icon from 'react-native-vector-icons/Feather'

import React from 'react'

interface TabIconProps {
    icon: any;
    color: string;
    name: string;
    focused: boolean;
}

const TabIcon: React.FC<TabIconProps> = ({ icon, color, name, focused }) => {
    return (
        <View className='flex items-center justify-center gap-1'>
            <Icon name={icon} size={24} color={color} className='h-6 w-6' />

            <Text
                numberOfLines={1}
                className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`}
                style={{ color: color, textAlign: "center", marginTop: 6, width: 70 }}
            >
                {name}
            </Text>

        </View>
    );
};


const TabsLayout = () => {
    return (
        <>
            <Tabs

                screenOptions={{
                    tabBarItemStyle: { minWidth: 80 },
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: "#FFA001",
                    tabBarInactiveTintColor: "#CDCDE0",
                    tabBarStyle: {
                        backgroundColor: "#161622",
                        borderTopWidth: 0,
                        borderTopColor: "#232523",
                        height: 84,
                        paddingTop: 16,
                    },
                }}
            >
                <Tabs.Screen
                    name="home"
                    options={{
                        title: "Home",
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon="home"
                                color={color}
                                name={"Home"}
                                focused={focused}
                            />
                        )
                    }}
                />
                <Tabs.Screen
                    name="goals"
                    options={{
                        title: "Goals",
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon="target"
                                color={color}
                                name={"Goals"}
                                focused={focused}
                            />
                        )
                    }}
                />
                <Tabs.Screen
                    name="settings"
                    options={{
                        title: "Settings",
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon="settings"
                                color={color}
                                name={"Settings"}
                                focused={focused}
                            />
                        )
                    }}
                />
            </Tabs >
        </>
    )
}

export default TabsLayout