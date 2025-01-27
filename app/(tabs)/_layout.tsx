import { View, Text } from 'react-native'
import { Tabs, Redirect } from 'expo-router'


const TabIcon = ({ icon, color, name, focused }) => {
    return (
        <View>
            
        </View>
    )
}


const TabsLayout = () => {
    return (
        <>
            <Tabs>
                <Tabs.Screen
                    name="goals"
                    options={{
                        title: "Goals",
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <View>
                                <Text>Goals</Text>
                            </View>
                        )
                    }}
                />
                <Tabs.Screen name="home" />
                <Tabs.Screen name="settings" />
            </Tabs>
        </>
    )
}

export default TabsLayout