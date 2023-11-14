import { Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './screens/LoginScreen';
import AddTripScreen from './screens/AddTripScreen';
import AddExpenseScreen from './screens/AddExpenseScreen';
import TripExpensesScreen from './screens/TripExpensesScreen';
import SignUpScreen from './screens/SignUpScreen';
import WelcomeScreen from './screens/WelcomeScreen';


export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  AddTrip: undefined;
  AddExpense: undefined;
  Welcome: undefined;
  SignUp  : undefined;
  TripExpenses: {id:number  , place:string , country:string};
};
const Stack = createNativeStackNavigator<RootStackParamList>();
function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" options={{presentation:'modal'}}  component={LoginScreen} />
        <Stack.Screen name="SignUp" options={{presentation:'modal'}} component={SignUpScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="AddTrip" component={AddTripScreen} />
        <Stack.Screen name="AddExpense" component={AddExpenseScreen} />
        <Stack.Screen name="TripExpenses" component={TripExpensesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
