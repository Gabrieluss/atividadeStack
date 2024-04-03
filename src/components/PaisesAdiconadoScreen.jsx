import React from "react";
import { View, Text, Button } from "react-native";

export default props => {
    return(
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Text>Paises e Cidades</Text>
            <Button
            title="Paises e cidades"
            onPress={() => props.navigantion.navigate('PaisAdicionados')}/>

        </View>
    )
}