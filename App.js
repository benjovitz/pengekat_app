import {RootSiblingParent} from "react-native-root-siblings"
import {NavigationContainer} from '@react-navigation/native'; 
import {createNativeStackNavigator} from '@react-navigation/native-stack'; 

import Login from './views/Login/Login.js';
import Pengekatte from "./views/Pengekatte/Pengekatte.js";
import GroupChat from "./views/GroupChat/GroupChat.js";
import AddExpense from "./views/AddExpense/AddExpense.js";
import Balance from "./views/Balance/Balance.js";
import NewGroup from "./views/NewGroup/NewGroup.js";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <RootSiblingParent>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>
          <Stack.Screen 
            name='Log Ind'
            component={Login}
            options={{
              headerStyle: {
                backgroundColor: "#032425"
              },
              headerTintColor: "#dfe3e4"
            }}
            />
          <Stack.Screen 
            name='Pengekatte'
            component={Pengekatte}
            options={{
              headerStyle: {
                backgroundColor: "#032425"
              },
              headerTintColor: "#dfe3e4"
            }} />
          <Stack.Screen 
            name='Chat'
            component={GroupChat} 
            options={{
              headerStyle: {
                backgroundColor: "#032425"
              },
              headerTintColor: "#dfe3e4"
            }}/>
          <Stack.Screen 
            name='Tilføj Udgift'
            component={AddExpense}
            options={{
              headerStyle: {
                backgroundColor: "#032425"
              },
              headerTintColor: "#dfe3e4"
            }} />
          <Stack.Screen 
            name='Balance'
            component={Balance} 
            options={{
              headerStyle: {
                backgroundColor: "#032425"
              },
              headerTintColor: "#dfe3e4"
            }}/>
          <Stack.Screen 
            name='Ny Gruppe'
            component={NewGroup} 
            options={{
              headerStyle: {
                backgroundColor: "#032425"
              },
              headerTintColor: "#dfe3e4"
            }}/>
        </Stack.Navigator>
      </NavigationContainer>
   </RootSiblingParent>
  );
}

