import React from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Screen2() {

  return (
    <View style={styles.container}>

      {/* MAPA SOLO PARA WEB */}
      {Platform.OS === 'web' ? (
        <iframe
          src="https://maps.google.com/maps?q=4.60971,-74.08175&z=14&output=embed"
          style={styles.map}
        />
      ) : (
        <View style={styles.noMap}>
          <Text>Mapa no disponible en esta plataforma</Text>
        </View>
      )}

      {/* BOTÓN */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Conseguir ruta</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  map: {
    flex: 1,
    width: '100%',
    border: 'none'
  } as any, // necesario para evitar error en TS

  noMap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  button: {
    backgroundColor: '#007BFF',
    padding: 20,
    alignItems: 'center'
  },

  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  }
});