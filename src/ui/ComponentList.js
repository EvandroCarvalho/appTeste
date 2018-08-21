import React, {Component} from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Clipboard, Image, ToastAndroid } from 'react-native';
import { connect } from 'react-redux';

import Modal from 'react-native-modal';
import ButtomCustom from './ButtonCustom';

import { removeData } from '../actions/MenuListActions';


class ComponentList extends Component {
    constructor(props){
        super(props)

        this.state = {
            visible: false,
            segredField: '******',
            flag: false
        }
    }

_writeToClipboard = async () => {
    await Clipboard.setString(this.props.password);
    ToastAndroid.showWithGravity( 'Senha copiada!', ToastAndroid.SHORT, ToastAndroid.CENTER );
    };

_togglePassword(flag){
    if(flag){
        this.setState({segredField: this.props.password, flag: true})
    }else {
        this.setState({ segredField: '*******', flag: false })
    }
}

_closeModal() {
    this.setState({ visible: false })
}

    render () {
        return(
        <TouchableHighlight
        onPress = { () => this.setState({visible: true}) }
        >
            <View style= {{flex: 1, flexDirection: 'row', borderBottomWidth: 1, padding: 5, backgroundColor: '#FFF'}}>
            <Image source={{
                    uri: `https://dev.people.com.ai/mobile/api/v2/logo/${this.props.link}`,
                    method: 'GET',
                    headers: {
                    authorization: this.props.token
                    },
                }}
                style={{width: 40, height: 40, marginRight: 10}} />
                <View style={{justifyContent: 'center'}} >
                    <Text style = {styles.styleText} link = { this.props.link } >{this.props.link}</Text>
                </View>
                <View style = {styles.container}>
                    <Modal
                        isVisible = {this.state.visible}
                    >
                        <View style={styles.modalContent}>
                            <ButtomCustom
                                title ={'Mostrar/Ocultar Senha'}
                                onPress = { () => this._togglePassword(!this.state.flag)}
                            />
                            <View style= {{borderWidth: 1, borderBottomColor: 'gray', margin: 10}}>
                                <Text style={styles.textModal} >Usuario/email: {this.props.email}</Text>
                                <View style= {{flexDirection: 'row', justifyContent: 'space-between'}}>
                                    <Text style={styles.textModal} >Senha: {this.state.segredField}</Text>
                                    <View style= {{alignItems: 'flex-end', justifyContent: 'center', marginRight: 10}}>
                                        <ButtomCustom
                                            title = 'copiar'
                                            onPress = { () => this._writeToClipboard()}
                                        />
                                    </View>
                                </View>
                            </View>
                            <View style = {{flexDirection: 'row', justifyContent: 'space-between' }} >
                                <ButtomCustom
                                    title = 'Voltar'
                                    onPress = {() => this._closeModal()}
                                />
                                <ButtomCustom
                                    title = 'Editar'
                                    onPress = { ()=> false /**
                                     * To Do
                                     */ }
                                />
                                <ButtomCustom
                                    title = 'Deletar'
                                    onPress = { () => {
                                        this.props.removeData(this.props)
                                        this._closeModal()
                                    }}
                                />    
                            </View>
                        </View>
                    </Modal>
                </View>
            </View>
        </TouchableHighlight>
        )
    }
}

const mapStateToProps = state => (
    {
        userLogged: state.AutenticationReducers.email,
    }
)




export default connect(mapStateToProps, { removeData })(ComponentList)

const styles = StyleSheet.create({
    styleText: {
        fontSize: 18,
        color: 'gray',
        fontWeight: 'bold',
    },
    modalContent: {
        backgroundColor: "white",
        padding: 20,
        borderRadius: 8,
        borderColor: "rgba(0, 0, 0, 0.1)"
      },
      container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20
      },
      textModal: { 
        marginLeft: 5 ,
        fontSize: 18, 
        color: 'gray',
        padding: 20,
    }

})