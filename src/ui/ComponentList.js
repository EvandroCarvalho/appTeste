import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default ComponentList = (props) => (
    <View style= {{flex: 1, flexDirection: 'row', borderBottomWidth: 1, padding: 5, backgroundColor: '#FFF'}}>
        <View style = {{width: 60, height: 60, backgroundColor: 'blue', marginRight: 10}}>
        </View>
        <View style= {{flexDirection: 'column', flex: 1}}>
            <View>
                <Text style = {styles.styleText} link = { props.link } >{props.link}</Text>
            </View>
            <View style= {{flex: 1}}>
                <Text style = {styles.styleText}>Usuário/email: email@amail.com </Text>
                <Text style = {styles.styleText}>Senha: senha123</Text>
            </View>
        </View>
    </View>
)

const styles = StyleSheet.create({
    styleText: {
        fontSize: 18,
        color: 'gray',
        fontWeight: 'bold'
    }

})