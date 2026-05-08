import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import MapView, { Marker, Polygon, PROVIDER_GOOGLE } from 'react-native-maps';
import { styles } from './styles/styles';

// Importación de tus archivos JSON
import cobertura from '../data/geojson/cobertura.json';
import paradasSITP from '../data/geojson/sitp_paraderos.json';

export default function Screen2() {
  const latitude = 4.60971;
  const longitude = -74.08175;

  return (
    <View style={styles.mapContainer}>
      <MapView
        provider={PROVIDER_GOOGLE} // Usar Google Maps suele ser más estable para GeoJSON pesados
        style={styles.map}
        initialRegion={{
          latitude,
          longitude,
          latitudeDelta: 0.3,
          longitudeDelta: 0.3,
        }}
      >
        {/* --- 1. CAPA DE POLÍGONOS (COBERTURA) --- */}
        {cobertura.features.map((feature: any, featureIndex: number) => {
          const geometry = feature.geometry;

          if (geometry.type === 'Polygon') {
            const coordinates = geometry.coordinates[0].map(([lng, lat]: number[]) => ({
              latitude: lat,
              longitude: lng,
            }));

            return (
              <Polygon
                key={`poly-single-${featureIndex}`}
                coordinates={coordinates}
                strokeColor="#0066FF"
                fillColor="rgba(0,102,255,0.2)"
                strokeWidth={2}
                zIndex={1} // Nivel bajo
              />
            );
          }

          if (geometry.type === 'MultiPolygon') {
            return geometry.coordinates.map((polygon: any, polygonIndex: number) => {
              const coordinates = polygon[0].map(([lng, lat]: number[]) => ({
                latitude: lat,
                longitude: lng,
              }));

              return (
                <Polygon
                  key={`poly-multi-${featureIndex}-${polygonIndex}`}
                  coordinates={coordinates}
                  strokeColor="#0066FF"
                  fillColor="rgba(0,102,255,0.2)"
                  strokeWidth={2}
                  zIndex={1} // Nivel bajo
                />
              );
            });
          }
          return null;
        })}

        {/* --- 2. CAPA DE PUNTOS (PARADAS SITP) --- */}
        {paradasSITP.features.map((parada: any, index: number) => {
          if (parada.geometry.type === 'Point') {
            const [lng, lat] = parada.geometry.coordinates;

            return (
              <Marker
                key={`marker-sitp-${index}`} // Key única prefijada
                coordinate={{ latitude: lat, longitude: lng }}
                title={parada.properties?.nombre || "Parada SITP"}
                pinColor="green"
                zIndex={2} // Nivel alto para que esté sobre el polígono
                tracksViewChanges={false} // ¡CRUCIAL! Mejora el rendimiento y evita bugs visuales
              />
            );
          }
          return null;
        })}

        {/* --- 3. MARCADOR DE MI UBICACIÓN --- */}
        <Marker 
          coordinate={{ latitude, longitude }} 
          title="Ubicación" 
          zIndex={3} 
        />
      </MapView>

      <TouchableOpacity style={styles.mapButton}>
        <Text style={styles.mapButtonText}>Conseguir ruta</Text>
      </TouchableOpacity>
    </View>
  );
}