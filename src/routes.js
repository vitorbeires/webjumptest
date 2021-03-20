import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ListMovies from './pages/listMovies';

const Routes = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Movies" component={ListMovies} />
    </Stack.Navigator>
  );
};

export default Routes;
