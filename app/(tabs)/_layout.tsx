import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { FontAwesome5 } from '@expo/vector-icons';
import { Link, Tabs } from 'expo-router';
import { Pressable, Image } from 'react-native';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import { MontSerratSemiBoldText} from '@/components/StyledText.tsx'
import {View, Text} from 'react-native'
import { green} from '@/constants/Colors.ts'


// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "",
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          headerRight: () => (
            <View style={{flexDirection : 'row', alignItems :'center', paddingRight : 20}}>
               <FontAwesome5 name='bell' size= {20} color={'white'}/>
               <Image
        style={{width : 30, height : 30,}}
        source={{uri: 'https://reactnative.dev/img/tiny_logo.png',}}
      />
            </View>
         
          ),
          headerLeft: () => (
            <Text style={{paddingLeft : 20}}>
                <MontSerratSemiBoldText style={{fontSize : 28}}>Moo</MontSerratSemiBoldText>
                <MontSerratSemiBoldText style={{fontSize : 28, color : '#07B603'}}>sic</MontSerratSemiBoldText>
            </Text>
            
          )
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          headerLeft: () => (
            <Text style={{paddingLeft : 20}}>
                <MontSerratSemiBoldText style={{fontSize : 28}}>Discover</MontSerratSemiBoldText>
            </Text>
            
          )
        }}
        
      />
    </Tabs>
  );
}
