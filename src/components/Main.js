import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, ScrollView, AsyncStorage, Text } from 'react-native';
import store from 'react-native-simple-store';
import ComponentList from '../ui/ComponentList';
import ButtonCustom from '../ui/ButtonCustom';


class Main extends Component {



_component() {
    let user = AsyncStorage.getItem('user1')
    let user5 = store.get('usuario')
    console.log('async')
    console.log(user)
    console.log('store')
    console.log(user5)
    return (
        <ComponentList
        />
    )

}

    

    render () {
        return (
            <View style = {{flex: 1}}>
                <View style= {{flex: 1}} >
                <ScrollView>
                    {this._component()}
                </ScrollView>       
                </View>
                <View>
                    <ButtonCustom
                        title = 'Adicionar'
                        onPress = {()=> false}
                    />
                </View>
            </View>
        )
    }
}

mapStateToProps = state => (
    {
        email: state.AppReducers.email,
        token: state.AppReducers.token
    }
)

export default connect(mapStateToProps, null)(Main);