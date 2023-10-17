import React from "react";
import { View, Text } from "react-native";
import styles from "./style";

export default function Rodape(){
    return(
        <View style={styles.formContext}>
            <View style={styles.formMain}>
                <Text style={styles.labelMain}>Média</Text>
                <Text style={styles.labelMain}>Cassificação</Text>
            </View>

            <View style={styles.divMain}></View>

            <View style={styles.form}>
                <Text style={styles.label}>Menor que 5</Text>
                <Text style={styles.label}>Reprovado</Text>
            </View>

            <View style={styles.div}></View>

            <View style={styles.form}>
                <Text style={styles.label}>Entre 5 e 7</Text>
                <Text style={styles.label}>Recuperação</Text>
            </View>

            <View style={styles.div}></View>
            
            <View style={styles.form}>
                <Text style={styles.label}>Maior que 7</Text>
                <Text style={styles.label}>Aprovado</Text>
            </View>
        </View>
    );

}