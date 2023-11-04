import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from './pages/home';
import { Saves } from './pages/saves';

const Tab = createBottomTabNavigator();

export function Routes() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name='Home'
        component={Home}
      />
      
      <Tab.Screen
        name='Saves'
        component={Saves}
      />
    </Tab.Navigator>
  )
}