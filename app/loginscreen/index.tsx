import { GestureResponderEvent, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { TextInput, Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../Type";

type LoginNavigation = StackNavigationProp<RootStackParamList, 'Login'>;

export default function LoginScreen() {

  const navigator = useNavigation<LoginNavigation>();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [hidePassword, setHidePassword] = React.useState(true);

  const handleSubmit = async () => {
    // if(username === name){
    //   if(password === pass) {
    //     navigator.navigate("Home");
    //   }
    // }else{
    //   alert('Username atau Password Salah!');
    // }

    // ambil dari api
    const url = "http://192.168.43.160:3000/login"
    try {
      const res = await fetch(url,{
        method: "POST",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify({
          email : username,
          password : password
        })
      });
      const response = await res.json(); 
      if(!res.ok) {
        console.log(response.message);
        
      }
      navigator.replace('Home', response);
    } catch (error) {
      console.log(error);
      
    }
  };



  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.header}>LoginScreen</Text>
        <TextInput
          style={styles.input}
          label="Email"
          mode="outlined"
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          style={styles.input}
          label="Password"
          mode="outlined"
          secureTextEntry={hidePassword}
          right={<TextInput.Icon onPress={() => setHidePassword(!hidePassword)} icon = {hidePassword ? "eye" : "eye-off"} />}
          onChangeText={(text) => setPassword(text)}
        />
        <Button
          style={styles.button}
          icon="home"
          mode="contained"
          onPress={() => handleSubmit()}
        >
          Login
        </Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontWeight: "bold",
    color: "#8a1894ff",
    fontSize: 30
  },
  input: {
    height: 50,
    width: 300,
  },
  button: {
    marginTop: 10,
    width: 250,
  },
});
