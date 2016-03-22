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


import Thirdpage from './thirdpage';
import Firstpage from './firstpage';

export default class Secondpage extends Component {

    constructor(props){
        super(props);
        console.log('second init');
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

    gotoThird(){
        const { navigator } = this.props;
        if(navigator){
            navigator.push({
                name:'thirdpage',
                component:Thirdpage,
                params:{
                    info:'from secondpage',
                }})
        }
    }

    replaceto(){
        const { navigator } = this.props;
        if(navigator){
            navigator.replace({
                name:'thirdpage',
                component:Thirdpage,
            })
        }
    }

    replaceself(){
        const { navigator } = this.props;
        if(navigator){
            navigator.replace({
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
        console.log('second componentWillMount is here');

    }

    componentDidMount() {
        console.log('second componentDidMount is here');
    }

    componentWillReceiveProps(nextprops){
        console.log('second componentWillReceiveProps is here');

    }

    shouldComponentUpdate(){
        console.log('second shouldComponentUpdate is here');
        return true;
    }

    componentWillUpdate(){
        console.log('second componentWillUpdate is here');

    }

    componentDidUpdate(){
        console.log('second componentDidUpdate is here');

    }

    componentWillUnmount(){
        console.log('second componentWillUnmount is here');

    }

    render() {
        console.log('second render is here');
        return (
            <View style={styles.container}>
                <TouchableOpacity style={[styles.buttonstyle,{borderColor:'red'}]} onPress={()=>this.back()}>
                    <Text>back</Text>
                </TouchableOpacity>
                <Text style={styles.welcome}>secondpage</Text>
                <TouchableOpacity  style={styles.buttonstyle} onPress={()=>this.gotoThird()}>
                    <Text>goto Thirdpage</Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.buttonstyle} onPress={()=>this.gotoFirst()}>
                    <Text>goto Firstpage</Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.buttonstyle} onPress={()=>this.replaceto()}>
                    <Text>replace to Thirdpage</Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.buttonstyle} onPress={()=>this.replaceself()}>
                    <Text>replace Self</Text>
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