import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Settings = () => {
    return (
        <SafeAreaView className='flex-1 bg-primary'>
            <View className='items-center justify-center'>
                <Text className='font-pblack bg-grey '>SETTINGS</Text>
            </View>
            <View className='items-center justify-center'>
                <Text className='bg-secondary'>SETTINGS2</Text>
            </View>
        </SafeAreaView>
    )
}

export default Settings