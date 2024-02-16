import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View, Switch } from 'react-native';

const icon = require('./assets/icon.png');

export default function App() {
  const [habilitado, setHabilidade] = new useState(false);

  const habilitar = () => {
    setHabilidade(habilitado);
  };
  return (
    <View style={styles.container}>
      <Image
      source={icon}
      style={styles.icon}
      />

      <Switch 
      value={habilitado}
      onvalueChange={habilitar}
      />

      <image 
      source={{
        uri: (habilitado)

       ? "./assets/lampadaon.png"
       : "./assets/lampadaoff.png"
      }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: '68px',
    height: '68px',
  },
  lampada: {
    width: '200px',
    height: '200px',
  },

});
