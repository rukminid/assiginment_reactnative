import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Dashboard from "../screens/Dashboard";
import Account from "../screens/Account";
import Camera from "../screens/Camera";
const Tab = createBottomTabNavigator();

const TabScreen = () => {
    return(
        // <View>
            // <Text>hellooo</Text>
            // </View>
        //     <Tab.Navigator>
        //     <Tab.Screen name="Home" component={Dashboard} />
        //     <Tab.Screen name="Settings" component={Account} />
        //   </Tab.Navigator>


        <Tab.Navigator
           tabBarOptions={{
               showLabel:true,
               labelStyle: {
                   fontSize: 14,
                   marginTop: 5,
                //    borderWidth: 2,

               },
               activeTintColor: '#8fcbbc',
               style:{
                   paddingVertical: 10,
                //    position: 'absolute',
                //    marginBottom:25,
                //    left: 15,
                //    right:15,
                //    elevation: 0,
                //    backgroundColor:'white',
                //    borderRadius:15,
                //    height:70,
                //    ...styles.shadow,
               }
            
           }}
        >
            <Tab.Screen name="Dashboard" component={Dashboard} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems:'center'}}>
                        <Image
                          source={require('../assets/icons/dashboard.png')}
                          resizeMode='contain'
                           style={{
                               width:35,
                               height:35,
                               tintColor: focused ? '#8fcbbc' : '#748ce94',
                           }}
                        />
                        {/* <Text
                            style={{}}
                        >Dashboard</Text> */}
                    </View>
                )
            }}/>
             <Tab.Screen name="Camera" component={Camera}options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems:'center'}}>
                        <Image
                            source={require('../assets/icons/camera.png')}
                            resizeMode='contain'
                            style={{
                                width:35,
                                height:35,
                                tintColor: focused ? '#8fcbbc' : '#748ce94',
                            }}
                        />
                        {/* <Text
                           style={{}}
                        >Camera</Text> */}
                    </View>
                )
            }}/>
            <Tab.Screen name="Account" component={Account}options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems:'center'}}>
                        <Image
                            source={require('../assets/icons/account.png')}
                            resizeMode='contain'
                             style={{
                                 width:35,
                                 height:35,
                                 tintColor: focused ? '#8fcbbc' : '#748ce94',
                             }}
                        />
                        {/* <Text
                            style={{}}
                        >Account</Text> */}
                    </View>
                )
            }}/>
           
        </Tab.Navigator>
    )
}

const styles=StyleSheet.create({
})

export default TabScreen;


