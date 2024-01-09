import { Text, FlatList, View } from "react-native"
import styles from "../../utils/styles.js"
import MemberCard from "../../components/MemberCard/MemberCard.js"

export default Balance = ({navigation, route}) => {
    const groupInfo = route.params?.groupInfo

    return(
        <FlatList
        style={{backgroundColor: "#042A2B"}} 
        data={groupInfo.members}
        keyExtractor={(item) => item._userId}
        renderItem={({item}) => <MemberCard member={item} />}/>
        
    )
}