import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../Type';

export default function UserScreen() {
  const route = useRoute<RouteProp<RootStackParamList, 'User'>>();
  const data = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>User Information</Text>

        <View style={styles.infoBox}>
          <Text style={styles.label}>Name</Text>
          <Text style={styles.value}>{data.name}</Text>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.label}>Age</Text>
          <Text style={styles.value}>{data.age}</Text>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.label}>Email</Text>
          <Text style={styles.value}>{data.email}</Text>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.label}>Address</Text>
          <Text style={[styles.value, styles.desc]}>{data.address}</Text>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.label}>Created At</Text>
          <Text style={styles.value}>{data.createdAt}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCEEF5', // lembut antara salmon dan pink muda
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 25,
    width: '90%',
    shadowColor: '#800080',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 6,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#6A1B9A', // ungu elegan
    textAlign: 'center',
    marginBottom: 20,
  },
  infoBox: {
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    color: '#A75D5D', // warna salmon lebih gelap
    fontWeight: '600',
  },
  value: {
    fontSize: 16,
    color: '#4A148C',
    fontWeight: '500',
  },
  desc: {
    textAlign: 'justify',
    marginTop: 5,
  },
});
