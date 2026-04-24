import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles/styles';
export default function App() {
return(
  <View style={styles.container}>
    <Text style={styles.text}>Bienvenido</Text>
     <Image 
        source={require('C:\\Users\\Estudiantes\\Proyectos David Guavita\\ProyectoNo7\\SantiagoApp\\assets\\images\\IconoApp.png')}
        style={styles.image}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Ingresar</Text>
      </TouchableOpacity>
  </View>
)
}