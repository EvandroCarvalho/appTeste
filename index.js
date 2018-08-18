import { AppRegistry } from 'react-native';
import { YellowBox } from 'react-native';

import App from './App';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated']);

AppRegistry.registerComponent('appTeste', () => App);
