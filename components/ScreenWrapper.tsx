import { View, Text, StatusBar, Platform } from 'react-native'
import React, { FC } from 'react'

const ScreenWrapper = ({children}:{children:any}) => {
    let statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight : Platform.OS == 'ios' ? 20 : 0;
  return (
    <View className='flex-1'>
     {children}
    </View>
  )
}

export default ScreenWrapper