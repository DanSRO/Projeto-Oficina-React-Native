import React from "react";
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'

import Carros from "../../component/Carros";

export default function Home(){
    const navigation=useNavigation();

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                source={require('../../assets/oficina.jpg')} 
                style={styles.image}           
                />

                <View style={styles.textContainer}>
                    <Text style={styles.text}>VEÍCULO</Text>
                    <Text style={[styles.text, { color: '%CECECF'}]}>Carro</Text>
                    <Text style={[styles.text, { color: '%CECECF'}]}>Moto</Text>
                    <Text style={[styles.text, { color: '%CECECF'}]}>Bicicleta</Text>
                    <Text style={[styles.text, { color: '%CECECF'}]}>Outros</Text>
                    <TouchableOpacity style={{position: 'absolute', right: 0, alignSelf: 'center'}}>
                        <MaterialIcons
                        name='filter-list'
                        size={24}
                        color='#000'
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.line}/>
            <ScrollView>
                <Text style={styles.text}>SERVIÇOS</Text>
                
                <View style={ {flexDirection: 'row', justifyContent:'space-around'}}>
                    <Carros img={require('../../assets/delorian.jpg')} cost="R$20000000,00" onClick={()=> navigation.navigate('Detail')}>
                        Delorian Original
                    </Carros>
                    <Carros img={require('../../assets/voador.jpg')} cost="R$21000000,00" onClick={()=> navigation.navigate('Detail')}>
                        Delorian Voador
                    </Carros>
                    <Carros img={require('../../assets/aquatico.jpg')} cost="R$20500000,00" onClick={()=> alert("CLICOU")}>
                        Delorian Aquático
                    </Carros>
                    <Carros img={require('../../assets/atualizado.jpg')} cost="R$20200000,00" onClick={()=> alert("CLICOU")}>
                        Delorian Atualizado
                    </Carros>
                </View>
                
                <View style={ {flexDirection: 'row', justifyContent:'space-around'}}>
                    <View style={{width: 80, height: 80, backgroundColor: 'red'}}></View>
                    <View style={{width: 80, height: 80, backgroundColor: 'red'}}></View>
                </View>

                <View style={ {flexDirection: 'row', justifyContent:'space-around'}}>
                    <View style={{width: 80, height: 80, backgroundColor: 'red'}}></View>
                    <View style={{width: 80, height: 80, backgroundColor: 'red'}}></View>
                </View>

            </ScrollView>
        </View >
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        width: '100%',
        backgroundColor:'#FFF'
    },
    header:{
        marginBottom: 8
    },
    image:{
        width: '100%'
    },
    textContainer:{
        flexDirection: 'row',
        marginVertical: '5%',
        marginHorizontal: '5%'
    },
    text:{
        fontFamily:'Anton_400Regular',
        fontSize: 26,
        marginHorizontal: '1%'
    }, line:{
        borderBottomColor: '#D8d8d8',
        borderBottomWidth: 2,
    }
});