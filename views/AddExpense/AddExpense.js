import { Text, View, TextInput, Button, Pressable, FlatList } from "react-native";
import { memo, useEffect, useState } from "react";
import Toast from "react-native-root-toast";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { BASE_URL } from "../../utils/store.js"
import CurrencyPicker from "../../components/CurrencyPicker/CurrencyPicker.js";
import styles from "../../utils/styles.js";

export default AddExpense = ({navigation, route}) => {

    const groupId = route.params?.groupId
    const userId = route.params?.userId
    const groupInfo = route.params?.groupInfo

    const [equalShareState, setEqualShareState] = useState(true)
    const [amount, setAmount] = useState(0)
    const [currency, setCurrency] = useState("DKK")
    const [comment, setComment] = useState("")
    const [unEqualShare, setUnequalShare] = useState(groupInfo.members.map(member => member = {userId: member._userId, share: 0, username: member.username}))
    const [amountCheck, setAmountCheck] = useState()

    useEffect(() => {
      setAmountCheck(unEqualShare.reduce((accumulator, currentValue) => accumulator + currentValue.share, 0))
      
    }, [unEqualShare])

    return(
         <View
          style={{backgroundColor:"#042A2B", backgroundColor: '#042A2B', justifyContent: 'center', flex: 1}} >
            <TextInput textAlign="center" placeholderTextColor="#dfe3e4" style={styles.input} onChangeText={(txt) => setAmount(txt)} keyboardType="numeric" placeholder="beløb"></TextInput>
            <CurrencyPicker currency={currency} setCurrency={setCurrency} />
            <TextInput placeholderTextColor="#dfe3e4" style={styles.input} placeholder="besked" onChangeText={(txt) => setComment(txt)}></TextInput>
            <Text style={{color: "#dfe3e4", fontSize: 40}}>Lige fordeling?</Text>
            <BouncyCheckbox
            fillColor="#F4E04D"
            isChecked={equalShareState}
            onPress={() => setEqualShareState(!equalShareState)}
            />
            {! equalShareState && <View>
              <Text>mangler: {amount - amountCheck}</Text>
              <FlatList
              data={unEqualShare}
              keyExtractor={(item) => item.userId}
              renderItem={({item}) => <View> 
                <Text>{item.username}</Text> 
                <TextInput
                keyboardType="numeric" 
                onChangeText={(share) => {
                    setUnequalShare(prevShares => prevShares.map(member => 
                      member.userId === item.userId ? {...member, share: Number(share)} : member
                    
                      ))
                  } 
                  
                }
                ></TextInput>
                </View>}
              >
              </FlatList>
            </View>}
            <Pressable onPress={() => handleAddExpense(groupInfo, groupId, equalShareState, amount, currency, comment, amountCheck, unEqualShare)} style={styles.button}>
                <Text style={styles.buttonText}>Tilføj</Text>
            </Pressable>
       
        </View>
    )

}



async function handleAddExpense(groupInfo, groupId, equalShareState, amount, currency, comment, amountCheck, unEqualShare){
  
    if(!amount || amount <= 0 || !Number(amount)){
      Toast.show("Indtast et deleligt beløb",{
        duration: Toast.durations.LONG
    })
      return
    }

   
    try {
      let shareOverview = []
      if(!equalShareState){
        if(amountCheck - amount != 0){
          Toast.show("Du skal dele hele beløbet op", {
            duration: Toast.durations.LONG
          })
          return
        }
        shareOverview = unEqualShare

      } else {
        groupInfo.members.map(member => {
          shareOverview.push({userId: member._userId, share: amount / groupInfo.members.length})
        })
      }
      const response = await fetch(BASE_URL + "/api/groups/" + groupId + "/expenses", {
      credentials: "include",
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({amount, currency, comment, shareOverview})
    })  
    const result = await response.json()
    Toast.show(result.data,{
      duration: Toast.durations.LONG
  })
    } catch (error) {
      Toast.show(error,{
        duration: Toast.durations.LONG
    })
    }
  }