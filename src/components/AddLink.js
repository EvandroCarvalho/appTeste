import React,{ Component } from 'react';
import { View, TextInput, StyleSheet, Alert } from 'react-native'
import { Actions } from 'react-native-router-flux'
import ButtonCustom from '../ui/ButtonCustom';
import { connect } from 'react-redux';
import { addListLink } from '../actions/MenuListActions'


class AddLink extends Component {
    constructor(props) {
        super(props);
        this.state = {
            urlAdd: '',
            userAdd: '',
            passwordAdd: ''
        }
    }

_clearFieldInput() {
    this.setState({
        urlAdd: '',
        userAdd: '',
        passwordAdd: ''
    })
}
    

    render() {
        return (
            <View style ={{flex: 1}}>
                <View style = {{flex: 1, alignContent: 'center', justifyContent: 'center'}}>
                    <TextInput
                        style = {styles.textInput}
                        placeholder = 'URL'
                        onChangeText = { url => this.setState({urlAdd: url}) }
                        value = {this.state.urlAdd}
                    />
                    <TextInput
                        style = {styles.textInput}
                        placeholder = 'USUARIO OU E-MAIL'
                        onChangeText = { user => this.setState({userAdd: user}) }
                        value = {this.state.userAdd}
                    />
                    <TextInput
                        style = {styles.textInput}
                        secureTextEntry = {true}
                        placeholder = 'SENHA'
                        onChangeText = { password => this.setState({passwordAdd: password}) }
                        value = {this.state.passwordAdd}
                    />
                </View>
                <View>
                    <ButtonCustom
                        title = 'Adicionar'
                        onPress = { () => {
                            this.props.addListLink(this.state, this.props);
                            Alert.alert(
                                'Novo site adicionado à lista!',
                                '',
                                [
                                    {text: 'Voltar a lista', onPress: () => Actions.linkList()},
                                    {text: 'Continuar Cadastrando', onPress: () => this._clearFieldInput() },
                                ],
                                { cancelable: false }
                                )
                        } }
                    />
                </View>

            </View>
        )
    }
}

mapStateToProps = state => (
    {
        dataSites: state.MenuListReducers.dataSites,
        emailLogged: state.AutenticationReducers.email
    }
)
export default connect(mapStateToProps,{addListLink})(AddLink)


const styles = StyleSheet.create({
    textInput: {
        fontSize: 20,
        height: 45,
    }
})