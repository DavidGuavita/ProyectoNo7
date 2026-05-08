import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import MapView, {
  Marker,
  Polygon
} from 'react-native-maps';

import { styles } from './styles/styles';

import cobertura from '../data/geojson/cobertura.json';

export default function Screen2() {

  const latitude = 4.60971;
  const longitude = -74.08175;

  return (
    <View style={styles.mapContainer}>

      <MapView
        style={styles.map}
        initialRegion={{
          latitude,
          longitude,
          latitudeDelta: 0.3,
          longitudeDelta: 0.3,
        }}
      >

        <Marker
          coordinate={{ latitude, longitude }}
          title="Ubicación"
        />

        {
          cobertura.features.map((feature: any, featureIndex: number) => {

            const geometry = feature.geometry;

            // POLYGON
            if (geometry.type === 'Polygon') {

              const coordinates = geometry.coordinates[0].map(
                ([longitude, latitude]: number[]) => ({
                  latitude,
                  longitude
                })
              );

              return (
                <Polygon
                  key={featureIndex}
                  coordinates={coordinates}
                  strokeColor="#0066FF"
                  fillColor="rgba(0,102,255,0.2)"
                  strokeWidth={2}
                />
              );
            }

            // MULTIPOLYGON
            if (geometry.type === 'MultiPolygon') {

              return geometry.coordinates.map(
                (polygon: any, polygonIndex: number) => {

                  const coordinates = polygon[0].map(
                    ([longitude, latitude]: number[]) => ({
                      latitude,
                      longitude
                    })
                  );

                  return (
                    <Polygon
                      key={`${featureIndex}-${polygonIndex}`}
                      coordinates={coordinates}
                      strokeColor="#0066FF"
                      fillColor="rgba(0,102,255,0.2)"
                      strokeWidth={2}
                    />
                  );
                }
              );
            }

            return null;

          })
        }

      </MapView>

      <TouchableOpacity style={styles.mapButton}>
        <Text style={styles.mapButtonText}>
          Conseguir ruta
        </Text>
      </TouchableOpacity>

    </View>
  );
}