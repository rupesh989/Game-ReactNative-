import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList, PointsScreenRouteProp, PointsScreenNavigationProp } from '../types';

type Props = {
  route: PointsScreenRouteProp;
  navigation: PointsScreenNavigationProp;
};

export default function PointsScreen({ route, navigation }: Props) {
  const { points } = route.params;
  const [totalPoints, setTotalPoints] = useState(0);

  useEffect(() => {
    setTotalPoints(prevPoints => prevPoints + points);
  }, [points]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Current Points</Text>
      <Text style={styles.points}>{totalPoints}</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} color="#1976D2" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0288D1',
    marginBottom: 20,
  },
  points: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#D32F2F',
    marginBottom: 30,
  },
});
