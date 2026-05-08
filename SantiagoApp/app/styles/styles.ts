import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  // INDEX
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 60,
    fontWeight: 'bold'
  },
  image: {
    width: 350,
    height: 350,
    marginTop: 20
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 30,
    paddingHorizontal: 60,
    borderRadius: 10,
    marginTop: 20
  },
  buttonText: {
    color: '#fff',
    fontSize: 36,
    fontWeight: 'bold'
  },

  // SCREEN2
  mapContainer: {
    flex: 1
  },
  map: {
    flex: 1
  },
  mapButton: {
    backgroundColor: '#007BFF',
    padding: 20,
    alignItems: 'center'
  },
  mapButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },

  // SCREEN3 (NUEVO)
  s3Container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  s3Header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    gap: 15,
  },
  s3Title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  s3SearchContainer: {
    padding: 20,
    backgroundColor: 'white',
    marginHorizontal: 15,
    borderRadius: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  s3InputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F1F3F4',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    height: 50,
  },
  s3Icon: {
    marginRight: 10,
  },
  s3Input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  s3LocationButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E8F0FE',
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 5,
    gap: 4,
  },
  s3LocationText: {
    color: '#0066FF',
    fontSize: 12,
    fontWeight: '600',
  },
  s3SearchButton: {
    backgroundColor: '#007BFF',
    margin: 20,
    height: 55,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  }
});