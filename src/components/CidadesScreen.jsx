import React, { useState } from "react";
import { View, Text, Button, SafeAreaView} from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default props => {
   


    return(
        <SafeAreaView style={{
            flex:1,
            alignItems: "center",
            justifyContent: "center",
        }}>        
            <Text>Cidades</Text>
        
            <Button
            title="Adicionar Cidade"
            onPress={() => props.navigation.navigate('Adicionadas')}
            color= "#3B3B3B"
            />
        </SafeAreaView>
    );
}