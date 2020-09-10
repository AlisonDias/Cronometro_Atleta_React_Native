import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { StackNavigator } from 'react-navigation';





export default class Resultado extends Component {

    

    constructor(props) {
        super(props)

        
/*
        this.state={
            text: "",
            itens: [{key:"1", nome:"Alison", tempo:"2.5"},
                    {key: "2", nome: "Pedro", tempo: "4.5" },  ],  
        }*/

        
   
        
    }

    renderItem(obj){

        

        return(

        <Text style={styles.text}>{obj.item.nome + " com tempo de " + obj.item.tempo}</Text>
        );
        
    }


    render(){

        const  itens  = this.props.route.params.itens
        

        return (
            <View style={styles.body}>

                <Text style={styles.resultado}>Resultados </Text>
                <View style={styles.tContainer}>

                    <FlatList data={itens}
                        renderItem={this.renderItem}
                        extraData={itens}>
                    </FlatList>

                 <Text></Text>
                 
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