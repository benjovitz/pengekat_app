import { View, Text, FlatList, Pressable} from "react-native";
import { BASE_URL } from "../../utils/store.js";
import GroupCard from "../../components/GroupCard/GroupCard.js";
import { socket } from "../../utils/socket.js";
import { useEffect, useState } from "react";
import styles from "../../utils/styles.js"



export default PengeKatte = ({navigation, route}) => {
    const userId = route.params?.userId
    const [groups, setGroups] = useState()



    useEffect(() => {
        getGroups(setGroups)
    }, [])

    return(
        <View style={styles.app}>
        <Pressable style={styles.button}>
        <Text style={styles.buttonText} onPress={() => navigation.navigate("Ny Gruppe")}>ny gruppe</Text>
        </Pressable>
        
        <FlatList
        data={groups}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => <GroupCard group={item} navigation={navigation} userId={userId} />}
        />
        </View>
    )
}

async function getGroups(setGroups){
    try {
        const response = await fetch(BASE_URL + "/api/groups", {
            credentials: "include"
        })
        const result = await response.json()
        setGroups(result.data)
    } catch (error) {
        
    }
}

