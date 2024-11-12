import { View, Text, Image } from 'react-native'
import React from 'react'
import {Tabs, Redirect} from 'expo-router'
import { icons } from '../../constants'

const TabIcon = ({ icons, color, name, focused }) => {
  return (
    <View>
      <Image
        source={icons}
        resizeMode="contain"
        tinColor={color}
        style= {{
            width: 24,
            height: 24,
        }}
      />
    </View>
  );
};

const TabsLayout = () => {
  return (
    <>
      <Tabs>
        <Tabs.Screen
          name = "home"
          options = {{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => {
              return (
                <TabIcon
                  icons = {icons.home}
                  color = {color}
                  name = "Home"
                  focused = {focused}
                />
              );
            },
          }}
        />

<Tabs.Screen
          name = "notification"
          options = {{
            title: 'Notification',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => {
              return (
                <TabIcon
                  icons = {icons.notification}
                  color = {color}
                  name = "notification"
                  focused = {focused}
                />
              );
            },
          }}
        />

<Tabs.Screen
          name = "plus"
          options = {{
            title: 'Plus',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => {
              return (
                <TabIcon
                  icons = {icons.plus}
                  color = {color}
                  name = "plus"
                  focused = {focused}
                />
              );
            },
          }}
        />

<Tabs.Screen
          name = "profile"
          options = {{
            title: 'Profile',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => {
              return (
                <TabIcon
                  icons = {icons.profile}
                  color = {color}
                  name = "profile"
                  focused = {focused}
                />
              );
            },
          }}
        />
<Tabs.Screen
          name = "search"
          options = {{
            title: 'Search',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => {
              return (
                <TabIcon
                  icons = {icons.search}
                  color = {color}
                  name = "search"
                  focused = {focused}
                />
              );
            },
          }}
        />
      </Tabs>
    </>
  );
};


export default TabsLayout