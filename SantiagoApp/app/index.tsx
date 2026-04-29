import { useRouter } from 'expo-router';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles/styles';

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bienvenido</Text>

      <Image 
        source={require('../assets/images/IconoApp.png')}
        style={styles.image}
      />

      <TouchableOpacity 
        style={styles.button}
        onPress={() => router.push('/Screen2')}
      >
        <Text style={styles.buttonText}>Ingresar</Text>
      </TouchableOpacity>
    </View>
  );
}