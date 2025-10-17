import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useRoute, RouteProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../Type";
import { StackNavigationProp } from "@react-navigation/stack";
import { TextInput, Button } from "react-native-paper";

export default function HomeScreen() {
  type HomeNavigation = StackNavigationProp<RootStackParamList, "Home">;

  const navigator = useNavigation<HomeNavigation>();

  const getProduct = async (id: number) => {
    try {
      const res = await fetch(`http://localhost:3000/product/${id}`);
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const detailProduct = await res.json();
      navigator.navigate("Product", detailProduct);
    } catch (error) {
      console.error("Failed to fetch product:");
      return null;
    }
  };

  const getUser = async (id: number) => {
    try {
      const res = await fetch(`http://localhost:3000/user/${id}`);
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const detailUser = await res.json();
      navigator.navigate("User", detailUser);
    } catch (error) {
      console.error("Failed to fetch user:");
      return null;
    }
  };

  const route = useRoute<RouteProp<RootStackParamList, "Home">>();
  const data = route.params;
  const user = data.user;
  const product = data.product;
  return (
    <View>
      <View style={styles.head}>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>And App</Text>
        <Text style={{ textAlign: "center", paddingTop: 10 }}>
          Manage your product data more quickly and efficiently..!
        </Text>
      </View>
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={{ textAlign: "center", fontWeight: "bold" }}>
            List User
          </Text>
          <FlatList
            style={styles.listUser}
            data={user}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View>
                <TouchableOpacity onPress={() => getUser(item.id)}>
                  <Text style={styles.listText}>{item.name}</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
        <View style={styles.card}>
          <Text style={{ textAlign: "center", fontWeight: "bold" }}>
            List Product
          </Text>
          <FlatList
            style={styles.listProduct}
            data={product}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View>
                <TouchableOpacity onPress={() => getProduct(item.id)}>
                  <Text style={styles.listText}>{item.name}</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      </View>
      <Button
        style={styles.button}
        icon="door"
        mode="contained"
        onPress={() => navigator.replace('Login')}
      >
        Logout
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  head: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  container: {
    marginTop: 20,
    flexDirection: "row",
  },
  card: {
    flex: 1,
    padding: 10,
  },
  listUser: {
    borderRadius: 20,
    padding: 10,
    backgroundColor: "purple",
  },
  listProduct: {
    borderRadius: 20,
    padding: 10,
    backgroundColor: "salmon",
  },
  listText: {
    color: "#fff",
    marginBottom: 5,
    fontWeight: "bold",
    fontSize: 14,
  },
  button: {
    alignSelf: 'center',
    marginTop: 360,
    width: 250,
  },
});
