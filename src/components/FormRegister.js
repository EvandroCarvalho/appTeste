import React, { Component  } from 'react';
import { Actions } from 'react-native-router-flux';

import { View,
    TextInput,
    StyleSheet,
    Button,
    ImageBackground,
    Text,
    ActivityIndicator,
    } from 'react-native';
import ButtonCustom from '../ui/ButtonCustom'
import { connect } from 'react-redux';
import { changeName,
        changeEmail,
        changePassword,
        registerUser } from '../actions/AutenticationActions'
        
class FormCadastro extends Component {
    constructor(props) {
        super(props);
    }


    renderBtnRegister() {
        if(this.props.loading){
            return (
                <ActivityIndicator size='large' />
            )
        }
        return (
            <ButtonCustom
                title = 'Cadastrar'
                onPress = {()=> this.props.registerUser(this.props) }
            />
        )
    }

    render (){
        return (
            <View style={{flex: 1, width: null, backgroundColor: '#fff'}} >
                <View style = {styles.viewMain}>
                    <View style = {styles.viewInput} >
                        <TextInput
                            value = {this.props.name}
                            onChangeText = { name => this.props.changeName(name) }
                            style = {styles.textInput}
                            placeholder = 'Nome'
                            placeholderTextColor = '#002939'
                        />
                        <TextInput
                            value = {this.props.email}
                            onChangeText = { email => this.props.changeEmail(email) }
                            style = {styles.textInput}
                            placeholder = 'Email'
                            placeholderTextColor = '#002939'
                        />
                        <TextInput
                            value = {this.props.senha }
                            onChangeText = { password => this.props.changePassword(password) }
                            style = {styles.textInput}
                            placeholder = 'Senha'
                            placeholderTextColor = '#002939'
                            secureTextEntry
                        />
                        <Text style={styles.textErro} >{this.props.errorRegister}</Text>
                        <Text style = {{fontSize: 15, justifyContent: 'center'}} >A senha deve conter no mínimo 10 digitos; sendo ao menos 1 caractere especial, 1 número e 1 letra maiuscula</Text>
                    </View>
                    <View style = {styles.viewButton}>
                        {this.renderBtnRegister()}
                    </View>
                </View>
        </View>
    );
}
}

const mapStateToProps = state => (
    {
        name: state.AutenticationReducers.name,
        email: state.AutenticationReducers.email,
        password: state.AutenticationReducers.password,
        errorRegister: state.AutenticationReducers.errorRegister,
        loading: state.AutenticationReducers.loading
    }
);

export default connect(
    mapStateToProps, 
    {
        changeName,
        changeEmail,
        changePassword,
        registerUser 
    })(FormCadastro)

const styles = StyleSheet.create({
    textErro:{
        color: '#ff0000',
        fontSize: 18

    },
    viewMain: {
        flex: 1,
        padding: 10,
    },
    viewInput: {
        flex: 4,
        justifyContent: 'center'
    },
    viewButton: {
        flex: 1
    },
    textInput: {
        fontSize: 20,
        height: 45,
    },

});

