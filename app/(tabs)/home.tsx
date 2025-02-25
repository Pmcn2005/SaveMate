import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Home = () => {
    return (
        <SafeAreaView className='bg-primary'>
            <View className='flex my-6 px-4 space-y-6'>

                <Text className='font-pblack'>HOME</Text>
            </View> 
        </SafeAreaView>
    )
}

export default Home