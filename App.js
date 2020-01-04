import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const cor = {
  color: "#ccc",
}

function colorText(cor){
  return cor;
}

type Props = {};
export default class App extends Component<Props> {

  constructor(props){
    super(props)
    this.state = {altura: 0, massa: 0, resultado: 0, resultadoText: ""}
    this.calcular = this.calcular.bind(this)
  }

  calcular(){
    
    let s = this.state
    let imc = s.massa / (s.altura * s.altura)
    s.resultado = imc
    this.setState(s)

    if(s.resultado < 16){
      s.resultadoText = "Magreza grave"
      cor.color = "#ff0000"
    }else if(s.resultado < 17){
      s.resultadoText = "Magreza moderada"
      cor.color = "#ff9933"
    }else if(s.resultado < 18.5){
      s.resultadoText = "Magreza leve"
      cor.color = "#ffff00"
    }else if(s.resultado < 25){
      s.resultadoText = "Saudável"
      cor.color = "#4ce600"
    }else if(s.resultado < 30){
      s.resultadoText = "Sobrepeso"
      cor.color = "#334d00"
    }else if(s.resultado < 35){
      s.resultadoText = "Obesidade Grau I"
      cor.color = "#ff9933"
    }else if(s.resultado < 40){
      s.resultadoText = "Obesidade Grau II"
      cor.color = "#ff8000"
    }else {
      s.resultadoText = "Obesidade Mórbida"
      cor.color = "#ff0000"
    }

  }

  render(){
    return (
      <View style={styles.container}>
        <View style={styles.entradas}>
          <TextInput placeholder="Altura" style={styles.input} keyboardType="numeric" onChangeText={(altura) => {this.setState({altura})}}/>
          <TextInput placeholder="Massa" style={styles.input} keyboardType="numeric" onChangeText={(massa) => {this.setState({massa})}}/>
        </View>
        <TouchableOpacity onPress={this.calcular} style={styles.button}><Text style={styles.buttonText}>Calcular</Text></TouchableOpacity>
        <Text style={[styles.resultado, {color: cor.color} ]}>{this.state.resultado.toFixed(2)}</Text>
        <Text style={[styles.resultado, {color: cor.color} ]}>{this.state.resultadoText}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  input: {
    width: '50%',
    height: 80,
    textAlign: 'center',
    fontSize: 40,
    marginTop: 24,
  },
  entradas:{
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#66ff33',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 20,
    padding: 20,
    fontWeight: 'bold',
    color: '#003300',
  },
  resultado:{
    textAlign: 'center',
    padding: 10,
    fontSize: 40,
  }

});
