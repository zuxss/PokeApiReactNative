import {createDrawerNavigator} from '@react-navigation/drawer';

import Home from '../screens/Home';
import KantoList from '../screens/Kanto';
import JohtoList from '../screens/Johto';
import HoennList from '../screens/Hoenn';
import SinnohList from '../screens/Sinnoh';
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#98c1d9',
          height: 300,
        },
      }}>
      <Drawer.Screen
        options={{headerShown: false}}
        name="Inicio"
        component={Home}
      />
      <Drawer.Screen name="Kanto" component={KantoList} />
      <Drawer.Screen name="Johto" component={JohtoList} />
      <Drawer.Screen name="Hoenn" component={HoennList} />
      <Drawer.Screen name="Sinnoh" component={SinnohList} />
    </Drawer.Navigator>
  );
}

export default MyDrawer;
