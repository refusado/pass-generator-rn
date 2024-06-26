import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from './pages/home';
import { Saves } from './pages/saves';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const tabOptions = {
  headerShown: false,
  tabBarShowLabel: false,
}

export function Routes() {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: '#252c3d'
      }}
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#21232b',
          borderTopColor: '#484e59',
        }
      }}
    >
      <Tab.Screen
        name='Home'
        component={Home}
        options={{
          ...tabOptions,
          tabBarIcon: ({ focused, color, size }) => {
            if (focused) {
              return <Ionicons size={size} color='#3b6aa4' name='home' />
            }

            return <Ionicons size={size} color={color} name='home-outline' />
          }
        }}
      />
      
      <Tab.Screen
        name='Saves'
        component={Saves}
        options={{
          ...tabOptions,
          tabBarIcon: ({ focused, color, size }) => {
            if (focused) {
              return <Ionicons size={size} color='#3b6aa4' name='list' />
            }

            return <Ionicons size={size} color={color} name='list-outline' />
          }
        }}
      />
    </Tab.Navigator>
  )
}