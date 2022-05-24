import React from 'react';
import {
    View,
    Image,
    StyleSheet, 
    SafeAreaView, 
    StatusBar, 
    Text,
    Pressable,
    Linking
} from 'react-native';


const colorGithub = '#010409';
const colorFontGithuh = '#C9D1D9';
const colorDarkFontGithuh = '#4F565E';

const imageProfileGithub = 'https://avatars.githubusercontent.com/u/104247632?v=4';

const urltoMyGithub = 'https://github.com/GilvaniaMoreira';


const App = () => {

    const handlePressGoToGithub = async () =>{
        console.log('Verificando o link');
        const res = await Linking.canOpenURL(urltoMyGithub);        
        if (res) {
            console.log('Link aprovado');
            console.log('Abrindo link...');
            await Linking.openURL(urltoMyGithub);
        }
    };

    return ( 
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={colorGithub} barStyle="light-content"/>
            <View style={style.content}>
                <Image 
                    accessibilityLabel='Gilvânia no computador' 
                    style={style.avatar} 
                    source={{uri: imageProfileGithub}}
                />
                <Text accessibilityLabel='Nome: gilvania moreira' 
                    style={[style.defaultText, style.name]}>
                    Gilvânia Moreira
                </Text>
                <Text accessibilityLabel='Nikcname: gilvania moreira'
                    style={[style.defaultText, style.nickname]}>
                    GilvaniaMoreira
                </Text>
                <Text accessibilityLabel='Descrição: Programming student'
                    style={[style.defaultText, style.description]}>
                    Programming student
                </Text>
                <Pressable onPress={handlePressGoToGithub}> 
                    <View style={style.button}>
                        <Text style={[style.defaultText, style.textButton]}>
                            Open in Github
                        </Text>    
                    </View>   
                </Pressable>
            </View>
        </SafeAreaView>
    );
};

export default App;

const style = StyleSheet.create({
    container:{ 
        // Colums
        backgroundColor: colorGithub,
        flex: 1, // Expandir para tela inteira
        justifyContent: 'center',
        alignItems: 'center'
    },

    content:{
        alignItems: 'center',
        padding: 20, // Espaço interno do componente
    },

    avatar:{
        height: 200,
        width: 200,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 2,
    },

    defaultText: {
        color: colorFontGithuh,    
    },

    name: {
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 24,
    },

    nickname: {
        fontSize: 18,
        color: colorDarkFontGithuh,
    },

    description: {
        fontWeight: 'bold',
        fontSize: 14,
    },

    button: {
        marginTop: 20,
        backgroundColor: colorDarkFontGithuh,
        borderRadius: 10,
        padding: 20,
    },

    textButton: {
        fontWeight: 'bold',
        fontSize: 16,
    },
});