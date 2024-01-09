import { View, Text } from "react-native";
import styles from "../../utils/styles.js";

export default MemberCard = ({member}) => {
    return(
        <View style={styles.memberCard}>
            <View>
            <Text style={{fontSize: 50, alignSelf: "center"}}>{member.username}</Text>
            </View>
            <View>
            <Text style={{fontSize: 50, alignSelf: "center"}}>{member.balance}</Text>
            </View>
        </View>
    )
}