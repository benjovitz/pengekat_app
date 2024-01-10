import ChatMessage from "../ChatMessage/ChatMessage.js";
import styles from "../../utils/styles.js";
import { FlatList, View } from "react-native";

export default Messages = ({messages, userId, groupInfo}) => {
    console.log(groupInfo)
    function addUsernames(){
        messages.map(message => {
            const foundMember = groupInfo.members.find(member => member._userId === message._userId)
            if(foundMember){
                message.username = foundMember.username
            }
        })

    }

    addUsernames()

    const test = [
        {
            comment: "hej"
        },
        {
            comment: "hej"
        },
        {
            comment: "hej"
        },
        {
            comment: "hej"
        },
        {
            comment: "hej"
        },
        {
            comment: "hej"
        },
        {
            comment: "hej"
        },
        {
            comment: "hej"
        },
        {
            comment: "hej"
        },
        {
            comment: "hej"
        },
        {
            comment: "hej"
        },
        {
            comment: "hej"
        },
        {
            comment: "hej"
        },
        {
            comment: "hej"
        },
        {
            comment: "hej"
        },
        {
            comment: "hej"
        },
        {
            comment: "hej"
        },
        {
            comment: "hej"
        },
        {
            comment: "hej"
        },
        {
            comment: "hej"
        },
        {
            comment: "hej"
        },
        {
            comment: "hej"
        },
        {
            comment: "hej"
        },
        {
            comment: "hej"
        },
        {
            comment: "hej"
        },
        {
            comment: "hej"
        },
        {
            comment: "hej"
        },
        {
            comment: "hej"
        },
        {
            comment: "hej"
        },
        {
            comment: "hej"
        },
        {
            comment: "hej"
        },
        {
            comment: "hej"
        },
        {
            comment: "hej"
        },
        {
            comment: "hej"
        },
        {
            comment: "hej"
        },
        {
            comment: "hej"
        },
        {
            comment: "hej"
        },
        {
            comment: "hej"
        },
        {
            comment: "hej"
        },
        {
            comment: "hej"
        },
        {
            comment: "hej"
        },
        {
            comment: "hej"
        },
        {
            comment: "hej"
        },
        {
            comment: "hej"
        },
        {
            comment: "hej"
        },
        {
            comment: "hej"
        },
        {
            comment: "hej"
        },
        {
            comment: "hej"
        },
        {
            comment: "hej"
        },
        {
            comment: "hej"
        },
        {
            comment: "hej"
        },
        {
            comment: "hej"
        },
        {
            comment: "hej"
        },
        {
            comment: "hej"
        },
        {
            comment: "hej"
        },
        {
            comment: "hej"
        },
        {
            comment: "hej"
        },
        {
            comment: "hej"
        },
        {
            comment: "hej"
        },
        {
            comment: "hej"
        },
        {
            comment: "hej"
        },
        {
            comment: "hej"
        },
        {
            comment: "hej"
        },
        {
            comment: "hej"
        },
        {
            comment: "hej"
        },
        {
            comment: "hej"
        },
        {
            comment: "hej"
        },
        {
            comment: "hej"
        },
        {
            comment: "hej"
        },
        {
            comment: "hej"
        },
        {
            comment: "hej"
        },
        {
            comment: "hej"
        },
        {
            comment: "hej"
        },
        
    ]
    return(
        <FlatList 
        style={styles.chatWindow}
        data={messages}
        keyExtractor={(item) => item._id}
        renderItem={({item}) => <ChatMessage message={item} userId={userId}/>}
        />
    )
}