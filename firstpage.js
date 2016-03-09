/**
 * lifeCycles demo
 * https://github.com/facebook/react-native
 */
'use strict';

import React, {
    StyleSheet,
    Component,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';

import Secondpage from './secondpage';
import Thirdpage from './thirdpage';

export default class Firstpage extends Component {

    constructor(props){
        super(props);
        console.log('first init');
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
    gotoThird(){
        const { navigator } = this.props;
        if(navigator){
            navigator.push({
                name:'thirdpage',
                component:Thirdpage,
            })
        }
    }

    componentWillMount(){
        console.log('first componentWillMount is here');

    }

    componentDidMount() {
        console.log('first componentDidMount is here');
    }

    componentWillReceiveProps(nextprops){
        console.log('first componentWillReceiveProps is here');

    }

    shouldComponentUpdate(){
        console.log('first shouldComponentUpdate is here');
        return true;
    }

    componentWillUpdate(){
        console.log('first componentWillUpdate is here');

    }

    componentDidUpdate(){
        console.log('first componentDidUpdate is here');

    }

    componentWillUnmount(){
        console.log('first componentWillUnmount is here');

    }



    render() {
        console.log('first render is here');
        return (
            <View style={styles.container}>
                <Text style={styles.center}>first page</Text>
                <TouchableOpacity style={styles.buttonstyle} onPress={()=>this.gotoSecond()}>
                    <Text>goto Secondpage</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonstyle} onPress={()=>this.gotoThird()}>
                    <Text>goto Thirdpage</Text>
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
    center: {
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