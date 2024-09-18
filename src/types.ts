import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';

export type RootStackParamList = {
  Home: undefined;
  Points: { points: number };
};

export type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;
export type PointsScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Points'>;

export type PointsScreenRouteProp = RouteProp<RootStackParamList, 'Points'>;
