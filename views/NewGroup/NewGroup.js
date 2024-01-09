import { useState } from "react"
import { Text, TextInput, Button, View, Pressable } from "react-native"
import Toast from "react-native-root-toast"
import { BASE_URL } from "../../utils/store.js"
import styles from "../../utils/styles.js"


export default NewGroup = ({navigation, route}) => {

    const [groupName, setGroupName] = useState("")
    return(
        <View style={styles.app}>
        <TextInput style={styles.input} placeholderTextColor="#dfe3e4" onChangeText={(txt) => setGroupName(txt)} placeholder="Gruppe Navn"></TextInput>
        <Pressable onPress={() => createGroup(groupName)} style={styles.button}>
            <Text style={styles.buttonText}>Opret</Text>
        </Pressable>
        </View>
    )
}

async function createGroup(groupName){
    if(!groupName){
        Toast.show("Din gruppe skal have et navn", {
            duration: Toast.durations.LONG
        })
        return
    }
    try {
        const response = fetch(BASE_URL + "/api/groups", {
            credentials: "include",
            method: "POST", 
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({groupName})
        })
        const result = await response.json()
        Toast.show(result.data, {
            duration: Toast.durations.LONG
        })
    } catch (error) {
        Toast.show(error, {
            duration: Toast.durations.LONG
        })
    }
}