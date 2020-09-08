import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Apresentacao from './Pages/Apresentacao';
import Cronometro from './Pages/Cronometro';
import Resultado from './Pages/Resultado';


const AppStack = createStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <AppStack.Navigator headerMode="none">
                <AppStack.Screen name="Apresentacao" component={Apresentacao} />
                <AppStack.Screen name="Cronometro" component={Cronometro} /> 
                <AppStack.Screen name="Resultado" component={Resultado} />   
            </AppStack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;