import { StatusBar } from 'expo-status-bar';
import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { IconButton } from '../components';
import Firebase from '../config/firebase';
import { UsuarioAutenticadoContexto } from '../navigation/UsuarioAutenticadoProvider';

const auth = Firebase.auth();

export default function HomeScreen() {
  const { usuario } = useContext(UsuarioAutenticadoContexto);
  const handleSignOut = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <StatusBar style='dark-content' />
      <View style={styles.row}>
        <Text style={styles.title}>Benvindo {usuario.email}!</Text>
        
      </View>
      
      <View style={styles.row}>
        <Text style={styles.text}>Seu UID é: {usuario.uid} </Text>
        
      </View>

      <IconButton
          name='logout'
          size={42}
          color='#fff'
          onPress={handleSignOut}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009999',
    paddingTop: 50,
    paddingHorizontal: 12
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#fff'
  },
  text: {
    fontSize: 16,
    fontWeight: 'normal',
    color: '#fff'
  }
});
