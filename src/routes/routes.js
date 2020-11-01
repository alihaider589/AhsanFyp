import * as React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Screens/Home'
import Login from '../Screens/Login'
import ForgetPassword from '../Screens/ForgetPassword'
import SentMail from '../Screens/SentMail'
import Signup from '../Screens/Signup'
import Notifications from '../Screens/Notification'
import Loggedin from '../Screens/Loggedin'




const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
      <Stack.Screen name="SentMail" component={SentMail} />
      <Stack.Screen name="Signup" component={Signup}/>
      <Stack.Screen name="Notification" component={Notifications}/>
      <Stack.Screen name="LoggedIn" component={Loggedin}/>


    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
