import { StyleSheet } from "react-native";
import ResultImc from "./ResultImc";

const styles = StyleSheet.create({
    formContext: {
        flex:1,
        backgroundColor:"#ffffff",
        marginTop:10,
        alignItems:"center",
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
    },
    form:{
        marginTop:10,
        width:"100%",
        height:"56%",
    },
    formLabel:{
        color:"#000000",
        fontSize:18,
        paddingLeft:20,
    },
    input:{
        width:"90%",
        borderRadius:50,
        backgroundColor:"#f6f6f6",
        height:40,
        margin:12,
        padding:10,
    },
    buttonCalculator:{
        borderRadius:50,
        alignItems:"center",
        justifyContent:"center",
        width:"90%",
        backgroundColor:"#FF0043",
        paddingTop:14,
        paddingBottom:14,
        marginLeft:12,
        margin:30,
    },
    textButtonCalculator:{
        fontSize:15,
        color:"#ffffff",
    },
    errorMessage:{
        fontSize:12,
        color:"red",
        fontWeight:"bold",
        paddingLeft:20,
    },
    exibitionResultImc:{
        width:"100%",
        height:"50%",
    },
    listImcs:{
        marginTop:20,
    },
    resultImcItem:{
        fontSize:26,
        color:"red",
        height:50,
        width:"100%",
        paddingRight:20,
    },
    textResultItemList:{
        fontSize:16,
        color:"red",
    }
});

export default styles