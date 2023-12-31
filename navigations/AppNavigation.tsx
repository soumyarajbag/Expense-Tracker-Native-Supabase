import {NavigationContainer} from '@react-navigation/native';
import AddExpenseScreen from '../screens/AddExpenseScreen';
import AddTripScreen from '../screens/AddTripScreen';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import TripExpensesScreen from '../screens/TripExpensesScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useAppDispatch, useAppSelector} from '../redux/hooks';
import {supabase} from '../lib/supabase';
import {setUser} from '../redux/slices/users';

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  AddTrip: undefined;
  AddExpense: {id:number};
  Welcome: undefined;
  SignUp: undefined;
  TripExpenses: {id: number; place: string; country: string};
};
const Stack = createNativeStackNavigator<RootStackParamList>();
function AppNavigation(): JSX.Element {
  const {user} = useAppSelector(state => state.user);
  const dispatch = useAppDispatch();
  supabase.auth.onAuthStateChange((event, session) => {
    if (event == 'SIGNED_IN') {
      console.log('SIGNED_IN', session);
      dispatch(setUser(session?.user));
    }
    else if(event=='SIGNED_OUT'){
      dispatch(setUser(null))
    }
  });

  if (user) {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="AddTrip" component={AddTripScreen} />
          <Stack.Screen name="AddExpense" component={AddExpenseScreen} />
          <Stack.Screen name="TripExpenses" component={TripExpensesScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Welcome"
          screenOptions={{headerShown: false}}>
          <Stack.Screen
            name="Login"
            options={{presentation: 'modal'}}
            component={LoginScreen}
          />
          <Stack.Screen
            name="SignUp"
            options={{presentation: 'modal'}}
            component={SignUpScreen}
          />
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default AppNavigation;
