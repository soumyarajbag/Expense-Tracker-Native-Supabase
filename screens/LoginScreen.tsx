import { View, Text } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { useNavigation } from '@react-navigation/native';
type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Login'>;
const LoginScreen = () => {
    const navigation = useNavigation();
  return (
    <View>
      <Text>LoginScreen</Text>
    </View>
  )
}

export default LoginScreen