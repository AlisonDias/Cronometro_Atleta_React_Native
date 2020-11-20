import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, Image, TextInput, ScrollView} from 'react-native';
import firebase from '../firebaseConfig';





export default class Cadastro extends Component {



    constructor(props) {
        super(props)

        this.state = {
            email: null,
            senha: null,

        }

        this.cadastrar = this.cadastrar.bind(this);

    }

    cadastrar() {

           
        
        firebase.auth().createUserWithEmailAndPassword(this.state.email.toString(), this.state.senha.toString()).catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorCode, errorMessage);
            // ...
        });

    
    }

    render() {
        return (
            <View style={styles.body}>
                <ScrollView>

                <Text style={styles.nomeApp}>Cadastro</Text>

                <Image
                    style={styles.logo}
                    source={require('../src/img/Logo.png')} />

                <View style={styles.formulario}>

                    <TextInput
                        placeholder="Digite seu e-mail"
                        onChangeText={(text) => this.setState({ email: text })}
                        style={styles.input}
                    />


                    <TextInput
                        placeholder="Digite sua senha"
                        onChangeText={(text) => this.setState({ senha: text })}
                        style={styles.input}
                    />

                    <View style={styles.tContainer}>
                        <TouchableOpacity style={styles.button} onPress={() => this.cadastrar()}>
                            <Text style={styles.buttonText}>Cadastrar</Text>
                        </TouchableOpacity>
                    </View>



                </View>
                </ScrollView>
            </View>



        );
    }
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#333',
        paddingTop: 50,
        alignSelf: 'center',
        padding: 60,

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
        margin: 10,
    },

    buttonText: {
        color: '#fff',
        alignSelf: 'center',
    },

    logo: {

        width: 300,
        height: 300,
        resizeMode: 'stretch',
        alignSelf: 'center',

    },

    input: {

        backgroundColor: '#848484',
        textAlign: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: 'white',
        padding: 20,
        borderRadius: 20,
        opacity: 0.9,
        marginBottom: 15,

    },

    formulario: {
        flex: 1,
        padding: 20,


    },


    nomeApp: {

        color: '#fff',
        fontSize: 40,
        textAlign: "center",
        padding: 20,


    }




});