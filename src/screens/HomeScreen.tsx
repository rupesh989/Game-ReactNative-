import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList, HomeScreenNavigationProp } from '../types';

type Props = {
  navigation: HomeScreenNavigationProp;
};

export default function HomeScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Points App!</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Win"
          onPress={() => navigation.navigate('Points', { points: 100 })}
          color="#4CAF50"
        />
        <Button
          title="Lose"
          onPress={() => navigation.navigate('Points', { points: -50 })}
          color="#F44336"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E3F2FD',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0277BD',
    marginBottom: 30,
  },
  buttonContainer: {
    width: '80%',
    justifyContent: 'space-between',
    height: 100,
  },
});
