import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { TabsName } from '@enums/navigation.enum';
import AddButton from '@navigation/AddButton';
import TabIcon from '@navigation/TabIcon';
import Home from '@screens/Home/Home';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabNavigator,
        tabBarIcon: ({ focused }) => <TabIcon name={route.name} size={36} focused={focused} />,
      })}
    >
      <Tab.Screen name={TabsName.Home} component={Home} />
      <Tab.Screen
        name={TabsName.Add}
        component={Home}
        options={{
          tabBarButton: () => <AddButton />,
        }}
      />
      <Tab.Screen name={TabsName.Settings} component={Home} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabNavigator: {
    height: 60,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
  },
});

export default Tabs;
