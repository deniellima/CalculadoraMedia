//Teste do github

import { View, Text } from "react-native";
import styles from "./style"; 

export default function Watemark(){

    return(
        
        <view style={styles.watermarkContainer}>
                <text style={styles.label}>Daniel Lima - 2ºNT</text>
        </view>  
    );
}

