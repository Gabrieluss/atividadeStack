import React from "react";
import { SafeAreaView, Text } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CidadesScreen from "./components/CidadesScreen";
import AdicionadasScreen from "./components/AdicionadasScreen";
import { StyleSheet } from "react-native";
import PaisesAdiconadoScreen from "./components/PaisesAdiconadoScreen";

const Stack = createNativeStackNavigator();

export default props=>{
    return(
        <SafeAreaView style={style1.fundo}>
            <NavigationContainer>
              <Stack.Navigator initialRouteName="Cidades">
                <Stack.Screen name="Cidades"
                component={CidadesScreen}
                options={
                    {title: 'Cidades'}
                }/>
                <Stack.Screen name="Adicionadas"
                component={AdicionadasScreen}
                options={
                    {title: 'Cidade'}
                }/>
                <Stack.Screen name="País"
                component={PaisesAdiconadoScreen}
                options={
                    {title: 'Paises Adicionado'}
                }/>
                </Stack.Navigator>  
            </NavigationContainer>
        </SafeAreaView>
    )
}

const style1 = StyleSheet.create(
    {
        fundo:{
            backgroundColor: "#0074b4",
            flexGrow: 1,
        }
    }
)