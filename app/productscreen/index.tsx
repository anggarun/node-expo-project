import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../Type';

export default function ProductScreen() {
  const route = useRoute<RouteProp<RootStackParamList, 'Product'>>();
  const data = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>{data.name}</Text>

        <View style={styles.infoBox}>
          <Text style={styles.label}>Brand</Text>
          <Text style={styles.value}>{data.brand}</Text>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.label}>Price</Text>
          <Text style={styles.price}>Rp {data.price}</Text>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.label}>Stock</Text>
          <Text style={styles.value}>{data.stock} Pcs</Text>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.label}>Created At</Text>
          <Text style={styles.value}>{data.createdAt}</Text>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.label}>Description</Text>
          <Text style={[styles.value, styles.desc]}>{data.description}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCEEF5', // lembut antara salmon & pink muda
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
    fontSize: 24,
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
    color: '#A75D5D', // salmon gelap
    fontWeight: '600',
  },
  value: {
    fontSize: 16,
    color: '#4A148C',
    fontWeight: '500',
  },
  price: {
    fontSize: 18,
    color: '#D16BA5', // gradasi salmon-ungu lembut
    fontWeight: '700',
  },
  desc: {
    textAlign: 'justify',
    marginTop: 5,
    lineHeight: 20,
  },
});
