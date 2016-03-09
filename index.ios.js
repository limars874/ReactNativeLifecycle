/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import React, {
    AppRegistry,
    Component,
    View,
    Navigator,
} from 'react-native';

import Firstpage from './firstpage';


class LifecycleTest extends Component {

    constructor(props){
        super(props);
        console.log('index init');
    }


    componentWillMount(){
        console.log('index componentWillMount is here');

    }

    componentDidMount() {
        console.log('index componentDidMount is here');
    }

    componentWillReceiveProps(nextprops){
        console.log('index componentWillReceiveProps is here');

    }

    shouldComponentUpdate(){
        console.log('index shouldComponentUpdate is here');
        return true;
    }

    componentWillUpdate(){
        console.log('index componentWillUpdate is here');

    }

    componentDidUpdate(){
        console.log('index componentDidUpdate is here');

    }

    componentWillUnmount(){
        console.log('index componentWillUnmount is here');

    }

    render() {
        const initName = 'firstpage';
        const initComponent = Firstpage;

        return (
            <Navigator
                initialRoute={{name: initName, component: initComponent}}
                configureScene={(route)=> {
                return Navigator.SceneConfigs.VerticalDownSwipeJump;
            }}
                renderScene={(route, navigator)=> {
                let Component = route.component;
                return <Component {...route.params} navigator={navigator}/>

            }} />
        );
    }
}
;


AppRegistry.registerComponent('MyProject', () => LifecycleTest);
