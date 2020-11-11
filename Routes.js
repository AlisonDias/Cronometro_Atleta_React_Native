import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Apresentacao from './Pages/Apresentacao';
import Cronometro from './Pages/Cronometro';
import Resultado from './Pages/Resultado';
import Login from './Pages/Login';
import Cadastro from './Pages/Cadastro';


const AppStack = createStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <AppStack.Navigator headerMode="none">
                <AppStack.Screen name="Apresentacao" component={Apresentacao} />
                <AppStack.Screen name="Login" component={Login} /> 
                <AppStack.Screen name="Cadastro" component={Cadastro} />
                <AppStack.Screen name="Cronometro" component={Cronometro} /> 
                <AppStack.Screen name="Resultado" component={Resultado} />   
            </AppStack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;