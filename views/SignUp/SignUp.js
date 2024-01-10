import { TextInput, Pressable, Text, View } from "react-native";
import styles from "../../utils/styles.js";
import { useState } from "react";
import Toast from "react-native-root-toast";
import { BASE_URL } from "../../utils/store.js";


export default SignUp = ({navigation}) => {

    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [repeatPassword, setRepeatPassword] = useState()

    return(
        <View style={styles.app} >
            <TextInput onChangeText={(txt) => setUsername(txt)} style={styles.input} placeholderTextColor="#dfe3e4" placeholder="Brugernavn"></TextInput>
            <TextInput onChangeText={(txt) => setEmail(txt)} style={styles.input} placeholderTextColor="#dfe3e4" placeholder="Email"></TextInput>
            <TextInput onChangeText={(txt) => setPassword(txt)} style={styles.input} placeholderTextColor="#dfe3e4" placeholder="Adgangskode"></TextInput>
            <TextInput onChangeText={(txt) => setRepeatPassword(txt)} style={styles.input} placeholderTextColor="#dfe3e4" placeholder="Gentag Adgangskode"></TextInput>

            <Pressable onPress={() => confirmCreateUser(username, email, password, repeatPassword)} style={styles.button}>
                <Text style={styles.buttonText}>Opret</Text>
            </Pressable>
        </View>
    )
}

function confirmCreateUser(username, email, password, repeatPassword){
    if(!username || ! email || !password || !repeatPassword){
        Toast.show("Fyld alle felter ud")
    }
    else if(password !== repeatPassword){
        Toast.show("Adgangskoden skal være ens")
    } else {
        handleCreateUser(username, email, password, repeatPassword)
    }
}

async function handleCreateUser(username, email, password, repeatPassword){
    try {
        const response = await fetch(BASE_URL + "/auth/signup", {
            credentials: "include",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({username, email, password}),
            method: "POST"
        })
        const result = await response.json()
        Toast.show(result.data)
    } catch (error) {
        Toast.show(error)
    }
}