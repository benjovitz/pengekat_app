import { useEffect, useState } from "react"
import { View, Text, FlatList, TextInput, Button, ScrollView, Pressable, Image } from "react-native"
import { BASE_URL } from "../../utils/store.js"
import ChatMessage from "../../components/ChatMessage/ChatMessage.js"
import { socket } from "../../utils/socket.js"
import Toast from "react-native-root-toast"
import Messages from "../../components/Messages/Messages.js"
import styles from "../../utils/styles.js"
import IonIcon from '@expo/vector-icons/Ionicons';

export default GroupChat = ({navigation, route}) => {

    const groupId = route.params?.groupId
    const userId = route.params?.userId
    const [messages, setMessages] = useState([])
    const [groupInfo, setGroupInfo] = useState()
    const [message, setMessage] = useState()
    const [newMember, setNewMember] = useState("")

    useEffect(() => {
        getGroupInfo(groupId, setGroupInfo)
        getMessages(groupId, setMessages)
    }, [])

    useEffect(() => {
        socket.on("new-message", (response) => {
            setMessages((prevMessages) => [...prevMessages, response.data])
        })
       }, [])

    useEffect(() => {
        socket.on("update-group", (response) => {
            setGroupInfo(response.data)
        })
       }, [])
       
       useEffect(() => {
        socket.on("update-messages", (response) => {
            setMessages((prevMessages) => prevMessages.filter((message) => message._id !== response.data))
        })
       }, [])

    
    return(
        <View style={styles.app}>
                <TextInput placeholderTextColor="#dfe3e4" style={styles.input} onChangeText={(txt) => setNewMember(txt)} placeholder="Tilføj Medlem"></TextInput>
                <Pressable style={styles.button} onPress={() => addMember(groupId, newMember)}>
                    <Text style={styles.buttonText}>Tilføj</Text>
                </Pressable>
                <Messages messages={messages} userId={userId} groupInfo={groupInfo} />
                <View style={{flexDirection: "row"}}>
                <TextInput style={{flex: 1, backgroundColor: "#F5F5F5"}} onChangeText={(txt) => setMessage(txt)} placeholder="besked..."></TextInput>
                <View style={{backgroundColor: "#F5F5F5"}}>
                <Pressable onPress={() => sendMessage(groupId, message, userId)} style={styles.sendMessageBtn}>
                <IonIcon style={{alignSelf: "center"}} size={25} name="send-sharp"></IonIcon>
                </Pressable>
                </View>
                </View>
            <View style={styles.bottomBar}>
                <Text style={styles.bottomButton} onPress={() => navigation.navigate("Balance", {groupInfo, userId})}>Se balance</Text>
                <Text style={styles.bottomButton} onPress={() => navigation.navigate("Tilføj Udgift", {userId, groupId, groupInfo})}>Tilføj udgift</Text>
                <Text style={styles.bottomButton} onPress={() => leaveGroup(groupId)}>Forlad gruppe</Text>
               
            </View>
        </View>
    )
}

async function getMessages(groupId, setMessages){
    try {
        const response = await fetch(BASE_URL + "/api/groups/" + groupId + "/messages", {
            credentials: "include"
          })
          const result = await response.json()
          setMessages(result.data)
    } catch (error) {
        console.log(error)
    }
   
  }

async function getGroupInfo(groupId, setGroupInfo){
    const response = await fetch(BASE_URL + "/api/groups/" + groupId, {
      credentials: "include"
    })
    const result = await response.json()
    setGroupInfo(result.data)
  }

async function sendMessage(groupId, message, userId){
    if(!message){
        Toast.show("Beskedfeltet er tomt", {
            duration: Toast.durations.LONG
        })
        return
    }
    try {
        const response =  await fetch(BASE_URL + "/api/groups/" + groupId + "/messages", {
        credentials: "include",
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({comment: message})
    })
    socket.emit("message-from-client", {groupId, comment: message, _userId: userId})
    } catch (error) {

    }
}

async function leaveGroup(groupId){
    try {
        const response =  await fetch(BASE_URL + "/api/groups/" + groupId + "/leave", {
        credentials: "include"
    })
    const result = await response.json()
    Toast.show(result.data, {
        duration: Toast.durations.LONG
    })
    } catch (error) {

    }
}

async function addMember(groupId, newMember){
    if(!newMember){
        Toast.show("Skriv et brugernavn", {
            duration: Toast.durations.LONG
        })
        return
    }
    try {
        const response =  await fetch(BASE_URL + "/api/groups/" + groupId + "/members", {
        credentials: "include",
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({members: [newMember]})
    })

    const result = await response.json()

    Toast.show(result.data, {
        duration: Toast.durations.LONG
    })
    } catch (error) {

    }
}
