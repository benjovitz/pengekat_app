import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    app: {
      flex: 1,
      backgroundColor: '#042A2B',
      alignItems: 'center',
      justifyContent: 'center'
    },
    pickerItem: {
      fontSize: 20,
      color: "#dfe3e4"
    },
    button: {
      backgroundColor: "#F4E04D",
      color: "#042A2B",
      borderRadius: 10,
      width: "auto",
      height: 55,
      width: "100%",
      marginBottom: 10
    },
    buttonText: {
      textAlign: "center",
      color: "black",
      fontWeight: "bold",
      fontSize: 30,
      padding: 5
    },
    groupCard:{
      flexDirection: "column",
      height: 200,
      width: 350,
      borderRadius: 20,
      backgroundColor: "#fcfcfc",
      alignItems: "center"
    },
    groupNameContainer:{
      flex: 1
    },
    groupBalanceContainer:{
      flex: 1,
      flexDirection: "row"
    },
    groupName:{
      fontSize: 30,
      fontWeight: "bold"
    },
    red: {
      color: '#ff0000',
      fontSize: 60
    },
    green: {
      color: '#25E485',
      fontSize: 60
    },
    bottomBar: {
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      width: "100%"
    },
    chatWindow:{
      height: 560,
      backgroundColor: "#F5F5F5",
      marginTop: 10,
      width: "100%",
      borderBottomColor: "black",
      borderBottomWidth: 1
    },
    sendMessageBtn: {
      backgroundColor: "#F4E04D",
      borderRadius: 100,
      width: 35,
      height: 35,
      justifyContent: "center",
      alignContent: "center"
    },
    bottomButton: {
      color: "white"
    },
    memberCard: {
      backgroundColor: "#F5F5F5",
      marginBottom: 40,
      borderRadius: 20
    },
    messageFromUser: {
      backgroundColor: "#0EBEBE",
      borderRadius: 15,
      borderTopRightRadius: 0,
      marginRight: 10,
      marginTop: 10,
      alignSelf: "flex-end",
      minHeight: 30,
      minWidth: 80,
      textAlign: "center",
      textAlignVertical: "center",
      padding: 10,
      fontSize: 20
    },
    messageFromOther: {
      backgroundColor: "#D6D6D6",
      borderRadius: 15,
      borderTopLeftRadius: 0,
      marginLeft: 10,
      marginTop: 10,
      alignSelf: "flex-start",
      minHeight: 30,
      minWidth: 80,
      textAlign: "center",
      textAlignVertical: "center",
      padding: 10,
      fontSize: 20
    },
    expense: {
      backgroundColor: "#F4E04D",
      borderRadius: 100,
      margin: 10,
      alignItems: "center",
      borderWidth: 2,
      borderColor: "black",
      padding: 10
    },
    input: {
      fontSize: 40, 
      color: "#dfe3e4", 
      marginBottom: 20
    },
    nameTagUser: {
      alignSelf: "flex-end"
    },
    expenseInput: {
      fontSize: 20, 
      color: "#dfe3e4", 
      marginBottom: 20
    },
  });
  