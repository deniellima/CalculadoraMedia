import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
    formContext:{
        width: "auto",
        height:"auto",
        bottom: 0,
        backgroundColor: "#1a1a1a",
        alignItems: "center",
        padding: 20,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        marginTop: 30,
        borderColor: "#4E4E4E",
        borderWidth: 1.5,
        shadowColor: '#000',
        shadowOffset: { width: 7, height: 7 },
        shadowOpacity: 0.4,
        shadowRadius: 5,
    },

    formMain:{
        width: 300,
        height: "auto",
        flexDirection: 'row',
    },

    form:{
        width: 300,
        height: "auto",
        flexDirection: 'row',
    },

    divMain:{
        width: "100%",
        height: 0.5,
        margin: 10,
        backgroundColor: "#fff"
    },

    div:{
        width: "100%",
        height: 1,
        margin: 5,
        backgroundColor: "#333333"
    },

    labelMain:{
        flex: 1,
        color: "#0074ef",
        fontSize: 14,
        paddingLeft: 10,
        fontWeight: "bold",
    },

    label:{
        flex: 1,
        color: "#fff",
        fontSize: 14,
        paddingLeft: 10,
    },
});

export default styles