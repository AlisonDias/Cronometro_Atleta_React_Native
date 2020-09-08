import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';




export default class Apresentacao extends Component {



    constructor(props) {
        super(props)


    }

    
    render() {
        return (
            <View style={styles.body}>

                <Text style={styles.nomeApp}>Cronômetro Atleta</Text>

                <Image
                    style={styles.logo}
                    source={require('../src/img/Logo.png')} />

                <View style={styles.tContainer}>
                    <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Cronometro')}>
                        <Text style={styles.buttonText}>Iniciar</Text>
                    </TouchableOpacity>
                    </View>
                
                </View>

                

        );
    }
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#333',
        paddingTop: 40,
        alignSelf: 'center',

    },

    tContainer: {
        alignItems: 'center',
    },

    buttonContainer: {
        padding: 20,
        flexDirection: 'row',
    },

    button: {
        backgroundColor: '#848484',
        marginHorizontal: 15,
        height: 40,
        justifyContent: 'center',
        width: 100,
        alignItems: 'center',
        borderRadius: 20,
    },

    buttonText: {
        color: '#fff',
        alignSelf: 'center',
    },

    logo:{

        width: 300,
        height: 300,
        resizeMode: 'stretch',
        alignSelf: 'center',

    },

    nomeApp:{

        color: '#fff',
        fontSize: 40,
        textAlign: "center",
        padding: 20,
        

    }



    
});