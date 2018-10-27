import React from 'react';
import { Button, Image, View, TouchableOpacity, Alert } from 'react-native';
import { ImagePicker, Permissions } from 'expo';

const SeleccionarImagen = (props) => {
  const permiso = async () => {
    const response = await Permissions.getAsync(Permissions.CAMERA_ROLL);
    console.log(response);
    return response;
  };
  
  const seleccionarImagen = async () => {
    const respuestaPermiso = await permiso();
    console.log(respuestaPermiso);
    if (respuestaPermiso.status === 'undetermined') {
      await Permissions.askAsync(Permissions.CAMERA_ROLL);
    } else if (respuestaPermiso.status === 'denied') {
      Alert.alert(
        'Permisos',
        'Desisntalar la aplicación, reinstalar y otorgar permisos',
        [
          {
            text: 'Entendido',
            onPress: () => { console.log('Entendido...'); },
          },
        ],
      );
      console.log('Debes reinstalar la aplicación y otorgar los permisos correspondientes...');
    } else if (respuestaPermiso.status === 'granted') {
      let result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [4, 3],
      });
      console.log(result);
      if (!result.cancelled) {
        props.cargar(result);
      }
    }
  };

  const radius =  { borderRadius: props.radius ? 0 : 80 }; 

  return (
    <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity onPress={seleccionarImagen}>
        { props.imagen ? (
          <Image
            source={{ uri: props.imagen.uri }} 
            style={{ width: 160, height: 160, ...radius }}
          />
        ) : (
          <Image
            source={require('../assets/margarita.jpg')} 
            style={{ width: 160, height: 160, ...radius }}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default SeleccionarImagen;