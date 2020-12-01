import React from 'react';
import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';

import LoadingScreen from './screens/LoadingScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';

 import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyBkD0Ynlkymc2PJgqd68YcBSTvTgVQNZJ4",
  authDomain: "social-app-dc870.firebaseapp.com",
  databaseURL: "https://social-app-dc870.firebaseio.com",
  projectId: "social-app-dc870",
  storageBucket: "social-app-dc870.appspot.com",
  messagingSenderId: "693200799514",
  appId: "1:693200799514:web:faa36dbf8c5ed1f5064ea3",
  measurementId: "G-R3HV3TEBX5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig); 

const AppStack = createStackNavigator({
  Home: HomeScreen
});

const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen,
});

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: "Loading"
    }

  )
)










