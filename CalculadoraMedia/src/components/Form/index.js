import React, { useState } from "react";
import { TextInput, View, Text, TouchableOpacity, Vibration, Share } from "react-native";
import styles from "./style"; 

export default function Form(){
    const [num1, setNum1] = useState(null);
    const [num2, setNum2] = useState(null);
    const [num3, setNum3] = useState(null);
    const [num4, setNum4] = useState(null);

    const [messageMedia, setMessageMedia] = useState ("Preencha as notas");
    const [media, setMedia] = useState (null);
    const [textButton, setTextButton] = useState ("Calcular");
    const [errorMessage, setErrorMessage] = useState(null);
    const [messageStatus, setMessageStatus] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    const onShare = async () => {
        const result = await Share.share({
            message: "Minha média é: " + media,
        })
    }

/*---------------------------------------------------------------------------------------------*/

    function mediaCalculator(){
        const medias=(((parseFloat(num1) + parseFloat(num2) + parseFloat(num3) + parseFloat(num4)) / 4).toFixed(1))

        setMedia(medias)

        if (medias < 5){
            setMessageStatus("Reprovado")
        } 

        else if (medias >= 5 && medias <= 7){
            setMessageStatus("Recuperação")
        }

        else if (medias > 7){
            setMessageStatus("Aprovado")
        }

        else if (medias == null){
            setMessageStatus(null)
        }
    }

    function verificationMedia(){
        if (media == null){
            setErrorMessage ("*Campo Obrigatório") 
            Vibration.vibrate()
            setIsVisible(false)
            setMessageMedia(null)
        }
    }

    function validationMedia(){
        if (num1 !=null && num2 !=null && num3 !=null && num4 !=null){
            mediaCalculator()
            setIsVisible(true)
            setNum1(null)
            setNum2(null)
            setNum3(null)
            setNum4(null)
            setMessageMedia ("Sua média é igual a:")
            setTextButton ("Calcular novamente")
            setErrorMessage (null)
        return
    }

/*---------------------------------------------------------------------------------------------*/

    setErrorMessage ("*Campo Obrigatório") 
    setMessageStatus(null)
    setIsVisible(false)
    setTextButton("Calcular")
    setMessageMedia("Primeiro preencha as notas!")
    verificationMedia()
    verificationStatus()
    }

    return(
        <View style={styles.formContext}>
            <View style={styles.form}>

                <view style={styles.erro}>
                    <Text style={styles.label}>Nota 1</Text>
                    <text style={styles.errorMessage}>{errorMessage}</text>
                </view>

                <TextInput style={styles.input}  onChangeText={setNum1} value={num1} placeholder="Ex: 10" keyboardType="numeric"/>

                <view style={styles.erro}>
                    <Text style={styles.label}>Nota 2</Text>
                    <text style={styles.errorMessage}>{errorMessage}</text>
                </view>

                <TextInput style={styles.input}  onChangeText={setNum2} value={num2} placeholder="Ex: 10" keyboardType="numeric"/>

                <view style={styles.erro}>
                    <Text style={styles.label}>Nota 3</Text>
                    <text style={styles.errorMessage}>{errorMessage}</text>
                </view>

                <TextInput style={styles.input}  onChangeText={setNum3} value={num3} placeholder="Ex: 10" keyboardType="numeric"/>

                <view style={styles.erro}>
                    <Text style={styles.label}>Nota 4</Text>
                    <text style={styles.errorMessage}>{errorMessage}</text>
                </view>

                <TextInput style={styles.input}  onChangeText={setNum4} value={num4} placeholder="Ex: 10" keyboardType="numeric"/>

                <TouchableOpacity style={styles.buttonCalculator} onPress={()=> validationMedia()}><Text style={styles.textButtonCalculator}>{textButton}</Text></TouchableOpacity>

                <view style={styles.form2}>
                    <View style={styles.result}>
                        <text style={styles.information}>{messageMedia}</text>

                        <text style={styles.number}>{media}</text>

                        <text style={styles.information}>{messageStatus}</text>
                    </View>

                    {isVisible && <TouchableOpacity style={styles.buttonShare} onPress={onShare}>

                    <svg style={styles.icon} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M13.803 5.33333C13.803 3.49238 15.3022 2 17.1515 2C19.0008 2 20.5 3.49238 20.5 5.33333C20.5 7.17428 19.0008 8.66667 17.1515 8.66667C16.2177 8.66667 15.3738 8.28596 14.7671 7.67347L10.1317 10.8295C10.1745 11.0425 10.197 11.2625 10.197 11.4872C10.197 11.9322 10.109 12.3576 9.94959 12.7464L15.0323 16.0858C15.6092 15.6161 16.3473 15.3333 17.1515 15.3333C19.0008 15.3333 20.5 16.8257 20.5 18.6667C20.5 20.5076 19.0008 22 17.1515 22C15.3022 22 13.803 20.5076 13.803 18.6667C13.803 18.1845 13.9062 17.7255 14.0917 17.3111L9.05007 13.9987C8.46196 14.5098 7.6916 14.8205 6.84848 14.8205C4.99917 14.8205 3.5 13.3281 3.5 11.4872C3.5 9.64623 4.99917 8.15385 6.84848 8.15385C7.9119 8.15385 8.85853 8.64725 9.47145 9.41518L13.9639 6.35642C13.8594 6.03359 13.803 5.6896 13.803 5.33333Z" fill="#fff"/> </svg>

                    <Text style={styles.textButtonCalculator}>Compartilhar</Text></TouchableOpacity>}
                </view>
            </View>
        </View>
    );
}

