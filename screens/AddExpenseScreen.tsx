import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const AddExpenseScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>AddExpenseScreen</Text>
    </View>
  )
}

export default AddExpenseScreen