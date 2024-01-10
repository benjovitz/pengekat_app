import { Text, Alert, View } from "react-native"
import { BASE_URL } from "../../utils/store.js"
import Toast from "react-native-root-toast"
import styles from "../../utils/styles.js"

export default ChatMessage = ({message, userId}) => {
    if(!message.amount){
        return(
            <View>
                <Text style={userId === message._userId ? {alignSelf: "flex-end"} : ""}>{message.username}</Text>
            <Text
            style={userId === message._userId ? styles.messageFromUser : styles.messageFromOther}
            >{message.comment}</Text>
            </View>
        )
    } else {
        return(
            <View style={styles.expense} >
            <Text style={{fontSize: 20, fontWeight: "bold"}} >{message.username} - {message.comment}</Text>
            <Text style={{fontSize: 30, fontWeight: "bold"}} onLongPress={() => confirmDelete(message)}>{message.amount} {message.currency}</Text>
            </View>
        )
    }


}


async function confirmDelete(message){
    if(!message.amount){
        return
    }
    Alert.alert("Slet udgift?", "Er du sikker på du vil slette denne udgift?",
    [
        {
            text: "Ja",
            onPress: () => {
                handleDeleteExpense(message)
            }
        },
        {
            text: "Nej"
        }
    ])
}

async function handleDeleteExpense(message){
    try {
        const response = await fetch(BASE_URL + "/api/groups/" + message._groupId + "/expenses", {
            credentials: "include",
            method: "DELETE",
            body: JSON.stringify({expenseId: message._id}),
            headers: {
            "content-type": "application/json"
                },
            })
            const result = await response.json()
            Toast.show(result.data,{
                duration: Toast.durations.LONG
            })
    } catch (error) {
        console.log(error)
    }
}