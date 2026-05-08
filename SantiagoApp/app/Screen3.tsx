import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles/styles'; // Importación de tus estilos centralizados

export default function Screen3() {
  const router = useRouter();
  const [origen, setOrigen] = useState('');
  const [destino, setDestino] = useState('');

  return (
    <SafeAreaView style={styles.s3Container}>
      {/* Cabecera */}
      <View style={styles.s3Header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.s3Title}>Planear Ruta</Text>
      </View>

      <View style={styles.s3SearchContainer}>
        {/* Barra de Origen */}
        <View style={styles.s3InputWrapper}>
          <Ionicons name="radio-button-on" size={20} color="#0066FF" style={styles.s3Icon} />
          <TextInput
            style={styles.s3Input}
            placeholder="Origen"
            value={origen}
            onChangeText={setOrigen}
          />
          <TouchableOpacity 
            style={styles.s3LocationButton}
            onPress={() => setOrigen('Mi ubicación actual')}
          >
            <Ionicons name="navigate" size={18} color="#0066FF" />
            <Text style={styles.s3LocationText}>Actual</Text>
          </TouchableOpacity>
        </View>

        {/* Barra de Destino */}
        <View style={styles.s3InputWrapper}>
          <Ionicons name="location" size={20} color="#FF3B30" style={styles.s3Icon} />
          <TextInput
            style={styles.s3Input}
            placeholder="¿A dónde vas?"
            value={destino}
            onChangeText={setDestino}
          />
        </View>
      </View>

      {/* Botón de búsqueda */}
      <TouchableOpacity style={styles.s3SearchButton}>
        <Text style={styles.mapButtonText}>Buscar Ruta</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}