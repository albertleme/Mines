import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import params from './src/params';
import Field from './src/components/Field';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Iniciando o Mines</Text>
      <Text>Tamanho da grade: {params.getRowsAmount()}X{params.getColumnsAmount()}</Text>
      <Field></Field>
      <Field opened></Field>
      <Field opened nearMines={1}></Field>
      <Field opened nearMines={2}></Field>
      <Field opened nearMines={3}></Field>
      <Field opened nearMines={6}></Field>
      <Field mined></Field>
      <Field mined opened></Field>
      <Field mined opened exploded></Field>
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
});
