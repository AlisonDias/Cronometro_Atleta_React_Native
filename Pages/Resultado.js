import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { StackNavigator } from 'react-navigation';
import firebase from '../firebaseConfig';





export default class Resultado extends Component {

    

    constructor(props) {
        super(props)

        

        this.state={
            text: "",
            itens: [],  
        }

        
        this.buscarDados();
        
    }

    buscarDados(){

        var userId = firebase.auth().currentUser.uid;

        try {
            firebase.database().ref('crud/' + userId).on('value', (snapshot) => {
                list = [];
                snapshot.forEach((childItem) => {
                    list.push({
                        key: childItem.key,
                        nome: childItem.val().nome,
                        tempo: childItem.val().tempo,
                    });
                });
                //setListFire(list);

                

                let newS = this.state;
                newS.itens = list;
                this.setState(newS);

            })

        } catch (error) {
            alert(error);
        }

    }

    

    renderItem(obj){

        

        return(

        <Text style={styles.text}>{obj.item.nome + " com tempo de " + obj.item.tempo}</Text>
        );
        
    }


    render(){

        //const  itens  = this.props.route.params.itens
        
        
        

        return (
            <View style={styles.body}>
                <ScrollView>

                <Text style={styles.resultado}>Resultados </Text>

               

                <View style={styles.tContainer}>

                    <FlatList data={this.state.itens}
                        renderItem={this.renderItem}
                        extraData={this.state.itens}>
                    </FlatList>

                 <Text></Text>
                 
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
        paddingTop: 40,
       

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

    logo: {

        width: 300,
        height: 300,
        resizeMode: 'stretch',
        alignSelf: 'center',

    },

    resultado: {

        color: '#fff',
        fontSize: 40,
        textAlign: "center",
        padding: 20,


    },

    text:{

        color: '#fff',
        fontSize: 20,
        textAlign: "center",
        padding: 7,

    },




});