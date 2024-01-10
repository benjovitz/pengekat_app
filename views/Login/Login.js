import { View, Text, TextInput, Button, Pressable } from "react-native";
import Toast from "react-native-root-toast";
import { useState } from "react";
import { BASE_URL } from "../../utils/store";
import styles from "../../utils/styles.js"


export default LoginPage = ({navigation, route}) => {
const [username, setUsername] = useState("")
const [password, setPassword] = useState("")


    
async function handleLogin(){
   /*  if(!username || !password){
        Toast.show("Udfyld brugernavn og adgangskode",{
            duration: Toast.durations.LONG
        })
        return
    } */
    const response = await fetch(BASE_URL + "/auth/signIn", {
        method: "POST",
        body: JSON.stringify({username: "daniel", password: "123"}),
        headers: {
            "content-type": "application/json"
        }
    })
    
    const result = await response.json()
    if(!response.ok){
        Toast.show(result.data, {
            duration: Toast.durations.LONG,
          });
          return
    }
    navigation.navigate("Pengekatte", {userId: result.data.userId})

}
    return (
        <View style={styles.app}>
            <TextInput style={styles.input} placeholderTextColor="#dfe3e4" onChangeText={(txt) => setUsername(txt)}  placeholder="Brugernavn/email" autoComplete="username"></TextInput>
            <TextInput style={styles.input} placeholderTextColor="#dfe3e4" onChangeText={(txt) => setPassword(txt)} placeholder="Adgangskode" secureTextEntry={true} autoComplete="current-password"></TextInput>
            <Pressable onPress={handleLogin} style={styles.button}>
                <Text style={styles.buttonText}>Log Ind</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate("Ny Bruger")} style={styles.button}>
                <Text style={styles.buttonText}>Opret</Text>
            </Pressable>
        </View>
    )
}

