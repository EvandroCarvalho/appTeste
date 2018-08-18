import React from 'react';
import ButtomCustom from '../ui/ButtonCustom'
import { View, Text, ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default Welcome = () => (
    <ImageBackground style={{flex: 1, padding: 10}} source={require('../ui/imgs/cadeado.png')}>
        <View style = {{flex: 3, alignContent:'center', justifyContent: 'center'}}>
            <Text style = {{fontSize: 25, fontWeight: 'bold', color: '#FFF', textAlign:'center'}} >Seu cadastro Realizado com sucesso!!</Text>
        </View>
        <View style={{flex: 0.5}}>
            <ButtomCustom
                title = 'Fazer Login'
                onPress = {() => Actions.formLogin()}
            />
        </View>
    </ImageBackground>
)

