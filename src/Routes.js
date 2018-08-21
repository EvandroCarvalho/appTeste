import React from 'react';

import { Router, Scene } from 'react-native-router-flux';

import FormLogin from './components/FormLogin';
import FormRegister from './components/FormRegister';
import LinkList from './components/LinkList';
import Welcome from './components/Welcome';
import AddLink from './components/AddLink'

const imageBack = require('./ui/imgs/back.png')

export default Routes = () => (
    <Router 
        navigationBarStyle={{backgroundColor: "#002939"}}
        titleStyle={{color: '#fff'}}
        
    >
        <Scene key ='root'>
            <Scene 
                key='formLogin'
                component={FormLogin} 
                titleStyle={{ color: '#FFF'}} 
                title='Login'
                hideNavBar
                initial = {true}
            />
            <Scene 
                key='formRegister'
                back = {true}
                component={FormRegister} 
                titleStyle={{ color: '#FFF'}} 
                title='Cadastro'
                backButtonImage = {imageBack}
            />
            <Scene 
                key='linkList'
                back= {true}
                component={LinkList} 
                titleStyle={{ color: '#FFF'}} 
                title='Lista de sites'
                backButtonImage = {imageBack}
            />
            <Scene 
                key='welcome'
                back= {true}
                component={Welcome} 
                titleStyle={{ color: '#FFF'}} 
                title='Bem Vindo'
                hideNavBar
            />
            <Scene 
                key='addLink'
                back= {true}
                component={AddLink} 
                titleStyle={{ color: '#FFF'}} 
                title='Adicionar site' 
                backButtonImage = {imageBack}
            />
        </Scene>
    </Router>
)



