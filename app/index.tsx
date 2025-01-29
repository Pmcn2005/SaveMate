import { View, Text } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { Link } from 'expo-router'
import React from 'react'

const Index = () => {
    return (
        <View className="flex-1 items-center justify-center ">
            <Text className="text-3xl font-pblack">SaveMate</Text>
            <Link href="/home" className=''>Go to home</Link>

            <StatusBar backgroundColor='#161622' style='light' />
        </View>
    )
}

export default Index