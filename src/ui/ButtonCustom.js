import React from 'react'

import { Text, TouchableHighlight, StyleSheet } from 'react-native';

export default ButtonCustom = (props) => (
    <TouchableHighlight
    style = {styles.styleButton}
    onPress = {props.onPress}
    >
        <Text style = {styles.styleText} title = {props.title}>
            {props.title}
        </Text>
    </TouchableHighlight>
)


const styles = StyleSheet.create({
    styleButton: {
        backgroundColor : '#002939', 
        borderRadius: 15, 
        height: 40, 
        justifyContent: 'center', 
        borderWidth: 0.6, 
        borderColor: '#fff',
        width: 'auto',
        padding: 15
    },
    styleText: {
        textAlign: 'center', 
        fontWeight: 'bold', 
        fontSize: 18, 
        color: '#fff'
    }
})