import { Text, View, Pressable, ImageBackground } from "react-native";
import { socket } from "../../utils/socket.js";
import styles from "../../utils/styles.js"



export default GroupCard = ({group, navigation, userId}) => {
    return(
        <View style={styles.app}>
        <Pressable style={styles.groupCard} onPress={() => {
            socket.emit("join-room", group._id)
            navigation.navigate("Chat", {groupId: group._id, userId: userId})
            }}>
                <ImageBackground source={{uri: group.image || "https://media1.thehungryjpeg.com/thumbs2/ori_3745126_4pm9g3aozttnxbb3pwzc9j3sghgrxn1ax5jh76wy_dollar-coins-falling-down-vector-flat-cartoon-gold-coin-illustration-finance-coin-design-currency-isolated.jpg"}}>
                <View style={styles.groupNameContainer}>
                <Text style={styles.groupName}>{group.group_name}</Text>
                </View>
                
                <View style={styles.groupBalanceContainer}>
                <Text  style={group.members[0].balance < 0 ? styles.red : styles.green}>
                            {group.members[0].balance}
                </Text>
                </View>
                </ImageBackground>
        </Pressable>
        </View>
    )
}