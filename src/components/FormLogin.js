import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { View,
    Text, 
    TextInput, 
    StyleSheet, 
    TouchableHighlight,
    ActivityIndicator,
    Image
    } from 'react-native';
import ButtomCustom from '../ui/ButtonCustom';
import { changeEmail,
    changePassword,
    validateUser } from '../actions/AutenticationActions';

class FormLogin extends Component {
    constructor(props) {
        super(props)
    }

    renderBtn() {
        if (this.props.loading) {
            return (
                <ActivityIndicator size='large'/>
            )
        }
        return (
            <ButtomCustom
                title = 'Acessar'
                onPress = {()=> this.props.validateUser(this.props)}
            />
        )
    }

    render () {
        return (
            <View style = {styles.viewMain}>
                <View style = {styles.viewTitle}>
                    <Image style ={{width: 70, height: 70}} source={require('../ui/imgs/cadeado.png')}/>
                </View>
                <View style = {styles.viewBody} >
                    <TextInput
                        value = {this.props.email}
                        onChangeText = { email => this.props.changeEmail(email) }
                        style = {styles.textInput}
                        placeholder = 'Email'
                        placeholderTextColor = '#002939'
                    />
                    <TextInput
                        value = {this.props.password}
                        onChangeText = { password => this.props.changePassword(password) }
                        style = {styles.textInput}
                        placeholder = 'Senha'
                        secureTextEntry = {true}
                        placeholderTextColor = '#002939'
                    />
                    <TouchableHighlight
                    onPress=  {() => Actions.formRegister()}
                    underlayColor = '#FFF'
                    >
                        <Text style = {styles.textLink} >Ainda não tem cadastro? Cadastre-se!</Text>
                    </TouchableHighlight>
                </View>
                
                <View style = {styles.viewButton}>
                    <Text style={{color: 'red', fontSize:18, marginBottom: 10, textAlign: 'center'}}>
                        {this.props.loginErro}
                    </Text>
                    {this.renderBtn()}
                </View>
            </View>
        );
    }
}

const mapStateToProsp = state => (
    {
        loading: state.AutenticationReducers.loading,
        password: state.AutenticationReducers.password,
        email: state.AutenticationReducers.email,
        loginErro: state.AutenticationReducers.loginErro
    }
)

export default connect(mapStateToProsp, 
    { changeEmail,
    changePassword,
    validateUser })(FormLogin)


const styles = StyleSheet.create({
    viewMain: {
        flex: 1,
        padding: 10,
        backgroundColor: '#FFF'
    },
    viewTitle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    viewBody: {
        flex: 2
    },
    viewButton: {
        flex: 2
    },
    textTitle: {
        fontSize: 25,
        color: '#002939'
    },
    textInput: {
        fontSize: 20,
        height: 45,
    },
    textLink: {
        fontSize: 15,
        marginLeft: 10,
        color: '#002939',
    }

})