import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar, Image} from 'react-native';
import Home from './Home';
import Cart from './Cart';
import Item from './Item';
import Addproduct from './screen/AddProduct';
import Splash from './screen/splash';
import ItemDetail from './ItemDetail';
import colors from './Utils/colors';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor="#E9646C"
        // barStyle={statusBarStyle}
        // showHideTransition={statusBarTransition}
        // hidden={hidden}
      />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Splash"
            component={Splash}
            options={{headerShown: false}}
          />

          <Stack.Screen name="Item" component={Item} />
          <Stack.Screen name="ItemDetail" component={ItemDetail} />
          <Stack.Screen
            options={{headerShown: false}}
            name="BottomApp"
            component={BottomApp}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

function BottomApp() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          headerShown:false,
          unmountOnBlur: true,
          tabBarIcon: ({color}) => (
            <Image
              source={require('./asset/house.png')}
              style={{width: 20, height: 20}}
            />
          ),
        }}
        name="Home"
        component={Home}
      />
       <Tab.Screen
        options={{
          headerShown:false,
          unmountOnBlur: true,
          tabBarIcon: ({color}) => (
            <Image
              source={require('./asset/plus.png')}
              style={{width: 20, height: 20}}
            />
          ),
        }}
        name="Add Product"
        component={Addproduct}
      />
      <Tab.Screen
        options={{
          unmountOnBlur: true,
          headerShown:false,
          tabBarIcon: ({color}) => (
            <Image
              source={require('./asset/carts.png')}
              style={{width: 20, height: 20}}
            />
          ),
        }}
        name="Cart"
        component={Cart}
      />
    </Tab.Navigator>
  );
}
