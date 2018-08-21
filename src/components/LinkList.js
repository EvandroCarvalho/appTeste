import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, ListView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import ComponentList from '../ui/ComponentList';
import ButtonCustom from '../ui/ButtonCustom';
import _ from 'lodash'

import { receiveLinks } from '../actions/MenuListActions';



class LinkList extends Component {

    constructor(props){
        super(props)

        this.state = {
            visible: false,
        }

    }

componentWillMount() {
    this.props.receiveLinks(this.props.email)
}

dataSource( lista ) {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2 })
    return this.fonteDeDados =  ds.cloneWithRows(lista)
}



renderRow(source) {
    return(
        <ComponentList
            link = {source.site}
            email = {source.user}
            password = {source.password}
            token = {source.token}
        />
    )
}


    render () {
        return (
            <View style = {{flex: 1}}>
                <ListView
                    enableEmptySections
                    dataSource = {this.dataSource(this.props.lista)}
                    renderRow = {this.renderRow}
                />
                <ButtonCustom
                    title = 'Adicionar Link'
                    onPress = { () => Actions.addLink()}
                />

            </View>
        )
    }
}

mapStateToProps = state => {
    const lista  = _.map(state.MenuListReducers.dataSites, (val, uid) => {
        return {...val, uid}
    })
    return {
        email: state.AutenticationReducers.email,
        token: state.AutenticationReducers.token,
        lista
    }
}


export default connect(mapStateToProps, {receiveLinks})(LinkList);
