import { Text, FlatList, View, Pressable } from "react-native"
import styles from "../../utils/styles.js"
import MemberCard from "../../components/MemberCard/MemberCard.js"

export default Balance = ({navigation, route}) => {
    const groupInfo = route.params?.groupInfo
    const userId = route.params?.userId

    let payCheck
    function buttonSet(){
        const user = groupInfo.members.find(member => member._userId === userId)
        console.log(user.balance)
        if(user.balance <= 0){
            payCheck = false
        }
        payCheck = true
      
    }
    buttonSet()

    return(
        <View style={styles.app}>
       { payCheck && <Pressable style={styles.button} onPress={handlePayment}>
                    <Text style={styles.buttonText}>Betal</Text>
                </Pressable>}
        <FlatList
        style={{width: "100%"}} 
        data={groupInfo.members}
        keyExtractor={(item) => item._userId}
        renderItem={({item}) => <MemberCard member={item} />}/>
        </View>
    )
}


async function handlePayment(){

}