/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import React, {
    StyleSheet,
    Component,
    Text,
    View,
    Navigator,
    TouchableOpacity,
} from 'react-native';

import Firstpage from './firstpage';
import Secondpage from './secondpage';

export default class Thirdpage extends Component {

    constructor(props){
        super(props);
        console.log('third init');
    }

    gotoFirst(){
        const { navigator } = this.props;
        if(navigator){
            navigator.push({
                name:'firstpage',
                component:Firstpage,
            })
        }
    }

    gotoSecond(){
        const { navigator } = this.props;
        if(navigator){
            navigator.push({
                name:'secondpage',
                component:Secondpage,
            })
        }
    }

    back(){
        const { navigator } = this.props;
        if(navigator){
            navigator.pop();
        }
    }

    componentWillMount(){
        console.log('third componentWillMount is here');

    }

    componentDidMount() {
        console.log('third componentDidMount is here');
    }

    componentWillReceiveProps(nextprops){
        console.log('third componentWillReceiveProps is here');

    }

    shouldComponentUpdate(){
        console.log('third shouldComponentUpdate is here');
        return true;
    }

    componentWillUpdate(){
        console.log('third componentWillUpdate is here');

    }

    componentDidUpdate(){
        console.log('third componentDidUpdate is here');

    }

    componentWillUnmount(){
        console.log('third componentWillUnmount is here');

    }

    render() {
        console.log('third render is here');
        return (
            <View style={styles.container}>
                <TouchableOpacity style={[styles.buttonstyle,{borderColor:'red'}]} onPress={()=>this.back()}>
                    <Text>back</Text>
                </TouchableOpacity>
                <Text style={styles.welcome}>thirdpage</Text>
                <TouchableOpacity  style={styles.buttonstyle} onPress={()=>this.gotoSecond()}>
                    <Text>goto Secondpage</Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.buttonstyle} onPress={()=>this.gotoFirst()}>
                    <Text>goto Firstpage</Text>
                </TouchableOpacity>


            </View>
        );
    }
}
;

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    buttonstyle:{
        justifyContent: 'center',
        alignItems: 'center',
        width:150,
        height:40,
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor:'#06c1ae',
        marginBottom: 5,
    },
})