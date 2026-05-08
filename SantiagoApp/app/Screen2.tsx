import * as Location from 'expo-location';
import React, { useEffect, useRef, useState } from 'react'; // Se añade useRef
import { Alert, Text, TouchableOpacity, View } from 'react-native';
import MapView, { LatLng, Marker, Polygon, PROVIDER_GOOGLE } from 'react-native-maps';

import cobertura from '../data/geojson/cobertura.json';
import paradasSITP from '../data/geojson/sitp_paraderos.json';
import { styles } from './styles/styles';

export default function Screen2() {
  const [userLocation, setUserLocation] = useState<Location.LocationObject | null>(null);
  
  // 1. Referencia para controlar el mapa
  const mapRef = useRef<MapView>(null);

  const bogotaRegion = {
    latitude: 4.60971,
    longitude: -74.08175,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert("Permiso denegado", "No podemos acceder a tu ubicación actual.");
        return;
      }
      
      let location = await Location.getCurrentPositionAsync({});
      setUserLocation(location);

      // 2. Centrar la cámara en la ubicación del usuario con una animación suave
      if (mapRef.current) {
        mapRef.current.animateToRegion({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.005, // Zoom más cercano para ver paraderos
          longitudeDelta: 0.005,
        }, 1000); // 1 segundo de duración
      }
    })();
  }, []);

  return (
    <View style={styles.mapContainer}>
      <MapView
        ref={mapRef} // 3. Vinculamos la referencia
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={bogotaRegion}
        showsUserLocation={true}
        showsMyLocationButton={true}
      >
        
        {/* --- 1. POLÍGONOS CON TYPESCRIPT CORREGIDO --- */}
        {cobertura?.features?.map((feature: any, fIndex: number) => {
          const geometry = feature.geometry;
          if (!geometry || !geometry.coordinates) return null;

          const polygons = geometry.type === 'MultiPolygon' ? geometry.coordinates : [geometry.coordinates];

          return polygons.map((polygon: any, pIndex: number) => {
            if (!Array.isArray(polygon[0])) return null;

            const coords: LatLng[] = [];
            
            polygon[0].forEach((coord: any) => {
              if (Array.isArray(coord) && coord.length >= 2) {
                coords.push({
                  latitude: coord[1],
                  longitude: coord[0]
                });
              }
            });

            if (coords.length === 0) return null;

            return (
              <Polygon
                key={`poly-${fIndex}-${pIndex}`}
                coordinates={coords}
                strokeColor="#0066FF"
                fillColor="rgba(0,102,255,0.15)"
                strokeWidth={2}
                zIndex={1}
              />
            );
          });
        })}

        {/* --- 2. PARADEROS CON VALIDACIÓN --- */}
        {paradasSITP?.features?.map((parada: any, index: number) => {
          if (
            parada.geometry && 
            parada.geometry.type === 'Point' && 
            Array.isArray(parada.geometry.coordinates)
          ) {
            const [lng, lat] = parada.geometry.coordinates;

            return (
              <Marker
                key={`paradero-${index}`}
                coordinate={{ latitude: lat, longitude: lng }}
                title={parada.properties?.nombre || "Paradero"}
                pinColor="green"
                zIndex={2}
                tracksViewChanges={false} // Mejora el rendimiento al no re-renderizar iconos estáticos
              />
            );
          }
          return null;
        })}

      </MapView>

      <TouchableOpacity style={styles.mapButton}>
        <Text style={styles.mapButtonText}>Conseguir ruta</Text>
      </TouchableOpacity>
    </View>
  );
}