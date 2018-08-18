import React from 'react';

import { Router, Scene } from 'react-native-router-flux';

import FormLogin from './components/FormLogin';
import FormRegister from './components/FormRegister';
import Main from './components/Main';
import Welcome from './components/Welcome';


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
            />
            <Scene 
                key='main'
                back= {true}
              //  initial = {true}
                component={Main} 
                titleStyle={{ color: '#FFF'}} 
                title='principal'
            />
            <Scene 
                key='welcome'
                back= {true}
                component={Welcome} 
                titleStyle={{ color: '#FFF'}} 
                title='Bem Vindo'
                hideNavBar
            />
        </Scene>
    </Router>
)



