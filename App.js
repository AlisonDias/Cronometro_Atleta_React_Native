import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

export default class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      timer: null,
      number: 0,
      startStopText: 'Start',
      nome: null,
      fraseFinal: "Aguardando Corredor",
    }

    this.startStopButton = this.startStopButton.bind(this);
    this.clearButton = this.clearButton.bind(this);
  }

  startStopButton() {

    if (this.state.timer == null) {
      let newS = this.state;
      newS.startStopText = 'Stop';
      
      this.setState(newS);

      this.state.timer = setInterval(() => {
        let newState = this.state;
        newState.number += 0.1;
        this.setState(newState);
        
      }, 100);

    } else {
      clearInterval(this.state.timer);
      let newState = this.state;
      newState.startStopText = 'Start';
      newState.fraseFinal = "O corredor " + this.state.nome + " está com o tempo de " + this.state.number;
      newState.timer = null;
      this.setState(newState);
    }
  }

  clearButton() {
    clearInterval(this.state.timer);
    let newState = this.state;
    newState.startStopText = 'Start';
    newState.timer = null;
    newState.number = 0;
    newState.fraseFinal = "Aguardando Corredor";
    this.setState(newState);
  }

  render() {
    return (
      <View style={styles.body}>

        

        <View style={styles.tContainer}>
          <Text style={styles.counterText}>{this.state.number.toFixed(1)}</Text>

          <TextInput
            placeholder="Digite o nome do corredor"
            onChangeText={(text) => this.setState({ nome: text })}
            style={styles.input}
          />

          <View style={styles.buttonContainer}>

            <TouchableOpacity style={styles.button} onPress={this.startStopButton}>
              <Text style={styles.buttonText}>{this.state.startStopText}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={this.clearButton}>
              <Text style={styles.buttonText}>Clear</Text>
            </TouchableOpacity>

          </View>
        </View>

      


        <Text style={styles.fraseFinal}>{this.state.fraseFinal}</Text>


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
  },

  counterText: {
    color: '#fff',
    fontSize: 40,
    fontWeight: 'bold',
  },

  footer: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#000',
    opacity: 0.4,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    height: 20
  },
  footerText: {
    color: '#fff'
  },

  fraseFinal:{
    color: '#fff',
    fontSize: 24,
    textAlign: "center",
   
  },

  input:{

    backgroundColor: '#848484',
    textAlign: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: 'white',
    padding: 20,
    borderRadius: 20,
    opacity: 0.9,

  }
});